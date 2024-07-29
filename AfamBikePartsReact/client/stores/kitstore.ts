import { action, computed, makeObservable, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { ChainInfoModel, KitChainModel, KitModel, KitState, SprocketModel } from "../models";
import { PartService } from "../services";
import { InfoService } from "../services/infoservice";
import { AppStore } from "./appstore";
import { PartStore } from "./partstore";

export class KitStore implements PartStore {
    public polyglot: Polyglot;

    // The kits managed by this store
    @observable
    public kits: KitModel[];

    // A modal to display a "picture" of a sprocket
    @observable
    public SprocketImageTitle: string;

    @observable
    public SprocketImageModalVisible: boolean;

    @observable
    public SprocketImageUrl: string;

    @action
    public HideSprocketImage(): void {
        document.body.classList.remove("modal-showing");
        this.SprocketImageTitle = "";
        this.SprocketImageModalVisible = false;
    }

    @action
    public ShowSprocketImage(sprocket: SprocketModel, url: string): void {
        this.SprocketImageTitle = sprocket.SprocketName;
        this.SprocketImageUrl = url;
        this.SprocketImageModalVisible = true;
    }

    // A modal to display an image of the chain
    @observable
    public ChainImageTitle: string;

    @observable
    public ChainImageModalVisible: boolean;

    @observable
    public ChainImageUrl: string;

    @action
    public HideChainImage(): void {
        document.body.classList.remove("modal-showing");
        this.ChainImageTitle = "";
        this.ChainImageModalVisible = false;
    }

    @action
    public ShowChainImage(chain: KitChainModel, url: string): void {
        this.ChainImageTitle = chain.FullName;
        this.ChainImageUrl = url;
        this.ChainImageModalVisible = true;
    }

    // A modal to display chain technical information
    @observable
    public ChainInfoModalVisible: boolean;

    @observable
    public ChainInfo: ChainInfoModel | undefined;

    @action
    public HideChainInfo(): void {
        document.body.classList.remove("modal-showing");
        this.ChainInfoModalVisible = false;
    }

    public ShowChainInfo(chain: KitChainModel): void {
        InfoService.GetChainInfo(chain.FullName, this.appStore.language, this.loadChainInfo);
    }

    // The bike for which kits are shown
    private bikeId: number;

    constructor(public appStore: AppStore) {
        makeObservable(this);

        this.kits = [];
        this.bikeId = 0;
        this.polyglot = this.appStore.polyglot;

        this.SprocketImageTitle = "";
        this.SprocketImageModalVisible = false;
        this.SprocketImageUrl = "";
        this.ChainImageTitle = "";
        this.ChainImageModalVisible = false;
        this.ChainImageUrl = "";
        this.ChainInfoModalVisible = false;
        this.ChainInfo = undefined;

        this.handleChainChange = this.handleChainChange.bind(this);
        this.handleSprocketChange = this.handleSprocketChange.bind(this);
        this.setInitialKitState = this.setInitialKitState.bind(this);
        this.updateChainLengths = this.updateChainLengths.bind(this);
        this.updateKits = this.updateKits.bind(this);
        this.updateSelectedChain = this.updateSelectedChain.bind(this);
        this.loadChainInfo = this.loadChainInfo.bind(this);

        this.HideChainInfo = this.HideChainInfo.bind(this);
    }

    @computed
    public get hasKits(): boolean {
        if (this.kits) {
            return this.kits.length !== 0;
        } else {
            return false;
        }
    }

    @computed
    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;
        this.getKits();
    }

    @action
    public handleSprocketChange(kit: KitModel, side: string, sprocket: SprocketModel): void {
        const kitState = kit.CurrentState;

        let front = kitState.SelectedFrontSprocket;
        let rear = kitState.SelectedRearSprocket;

        const frontDefault = kit.FrontDefaultTeeth;
        const rearDefault = kit.RearDefaultTeeth;
        const defaultChainLength = kit.ChainLength;
        const currentChainLength = kitState.CurrentChainLength;

        if (side === "front") {
            front = sprocket;
        } else {
            rear = sprocket;
        }

        /*
           Calculate the number of links to add/subtract from the default chain length
           based on the number of teeth of the selected front and rear sprocket
        */
        let extraLinks = 0;

        const teethDifference = rear.Teeth - frontDefault + front.Teeth - rearDefault;

        if (teethDifference > 0) {
            extraLinks = (Math.floor((teethDifference - 1) / 3) + 1) * 2;
        } else if (teethDifference < 0) {
            extraLinks = Math.ceil((teethDifference + 1) / 3) * 2;
        }

        let newChains = kitState.CurrentChains;
        let newSelectedChain = kitState.SelectedChain;
        const newChainLength = defaultChainLength + extraLinks;

        /* Update the length of all chains if required */
        if (newChainLength !== currentChainLength) {
            newChains = this.updateChainLengths(newChains, newChainLength);
            newSelectedChain = this.updateSelectedChain(newChains, newSelectedChain, newChainLength);
        }

        /* Update the kit */
        kitState.CurrentChains = newChains;
        kitState.CurrentChainLength = newChainLength;
        kitState.SelectedChain = newSelectedChain;
        kitState.SelectedFrontSprocket = front;
        kitState.SelectedRearSprocket = rear;
    }

    @action
    public handleChainChange(kit: KitModel, chain: KitChainModel): void {
        kit.CurrentState.SelectedChain = chain;
    }

    @action
    private getKits(): void {
        if (this.bikeId !== 0) {
            PartService.GetKits(this.appStore.parts, this.bikeId, this.appStore.language, this.updateKits);
        } else {
            this.updateKits([]);
        }
    }

    @action
    private updateKits(newKits: KitModel[]): void {
        this.setInitialKitState(newKits);
        this.kits = newKits;
    }

    @action
    private setInitialKitState(kits: KitModel[]): void {
        kits.forEach((k) => {
            const state: KitState = {
                CurrentChainLength: k.ChainLength,
                CurrentChains: k.Chains,
                SelectedChain: k.Chains.find((c: KitChainModel) => c.FullName === k.Chain) || k.Chains[0],
                SelectedFrontSprocket: k.FrontSprockets.find((s: SprocketModel) => s.SprocketName === k.FrontSprocket)
                    || k.FrontSprockets[0],
                SelectedRearSprocket: k.RearSprockets.find((s: SprocketModel) => s.SprocketName === k.RearSprocket)
                    || k.RearSprockets[0],
            };
            k.CurrentState = state;
        });
    }

    /**
     * Update the length of all chains and return the new list of chains
     * @param {number} newChainLength - The new length
     */
    @action
    private updateChainLengths(chains: KitChainModel[], newChainLength: number): KitChainModel[] {
        const newChains = chains;

        newChains.forEach((c) => {
            c.Length = newChainLength;
            c.FullName = c.ChainBaseName + " " + newChainLength.toFixed(0) + "L";
        });

        return newChains;
    }

    /**
     * Update the length of the selected chain and return the new chain
     * @param {number} newChainLength - The new length
     */
    @action
    private updateSelectedChain(chains: KitChainModel[],
        selectedChain: KitChainModel,
        newChainLength: number): KitChainModel {
        return chains.find((c) => c.ChainBaseName === selectedChain.ChainBaseName) || chains[0];
    }

    @action
    public loadChainInfo(info: ChainInfoModel) {
        this.ChainInfo = info;
        this.ChainInfoModalVisible = true;
    }
}