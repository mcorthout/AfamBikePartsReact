import { action, computed, makeObservable, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { BikeReverseModel, SprocketListModel } from "../models";
import { PartService, ReverseService} from "../services";
import { AppStore } from "./appstore";
import { PartStore } from "./partstore";

export class SprocketStore extends PartStore {
    public polyglot: Polyglot;

    @observable
    public sprockets: SprocketListModel[];

    // A modal to display an image of the sprocket
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
    public ShowSprocketImage(sprocket: SprocketListModel, url: string): void {
        this.SprocketImageTitle = sprocket.CatalogNumber;
        this.SprocketImageUrl = url;
        this.SprocketImageModalVisible = true;
    }

    /* Reverse applications */
    @observable
    public SprocketReverseTitle: string;

    @observable
    public SprocketReverseModalVisible: boolean;

    @observable
    public ReversedBikes: BikeReverseModel[];

    @action
    public HideReversedBikes(): void {
        document.body.classList.remove("modal-showing");
        this.SprocketReverseModalVisible = false;
        this.ReversedBikes = [];
        this.SprocketReverseTitle = "";
    }

    @action
    public ShowReversedBikes(sprocket: SprocketListModel): void {
        this.ReversedBikes = [];
        this.SprocketReverseTitle = sprocket.CatalogNumber;
        ReverseService.GetBikes(sprocket.PartId, this.updateReverseBikes);
    }

    @action
    private updateReverseBikes(newBikes: BikeReverseModel[]): void {
        this.ReversedBikes = newBikes;
        this.SprocketReverseModalVisible = true;
    }

    private bikeId: number;

    constructor(public appStore: AppStore) {
        super();

        makeObservable(this);

        this.sprockets = [];
        this.bikeId = 0;
        this.polyglot = this.appStore.polyglot;

        this.SprocketImageTitle = "";
        this.SprocketImageModalVisible = false;
        this.SprocketImageUrl = "";

        this.SprocketReverseModalVisible = false;
        this.ReversedBikes = [];
        this.SprocketReverseTitle = "";

        this.updateSprockets = this.updateSprockets.bind(this);
        this.updateReverseBikes = this.updateReverseBikes.bind(this);
    }

    @computed
    public get isFront(): boolean | undefined {
        if (this.hasSprockets) {
            var firstone = this.sprockets[0];
            return firstone.Side == "F";
        }
        else {
            return undefined;
        }
    }

    @computed
    public get hasSprockets(): boolean {
        if (this.sprockets) {
            return this.sprockets.length !== 0;
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
        this.getSprockets();
    }

    @action
    private getSprockets(): void {
        if (this.bikeId !== 0) {
            PartService.GetSprockets(this.appStore.parts, this.bikeId, this.appStore.language, this.updateSprockets);
        } else {
            this.updateSprockets([]);
        }
    }

    @action
    private updateSprockets(newSprockets: SprocketListModel[]): void {
        this.sprockets = newSprockets;
    }
}