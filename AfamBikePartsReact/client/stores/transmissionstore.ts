import { computed, makeObservable, observable} from "mobx";
import * as Polyglot from "node-polyglot";
import { PartBrands } from "../constants";
import { AppStore } from "./appstore";
import { ChainStore } from "./chainstore";
import { KitStore } from "./kitstore";
import { PartStore } from "./partstore";
import { SprocketStore } from "./sprocketstore";

export class TransmissionStore extends PartStore {
    public polyglot: Polyglot;

    @observable
    public kitstore: KitStore;

    @observable
    public chainstore: ChainStore;

    @observable
    public frontsprocketstore: SprocketStore;

    @observable
    public rearsprocketstore: SprocketStore;

    // The bike for which parts are shown
    private bikeId: number;

    @computed
    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;
        this.kitstore.BikeId = this.bikeId;
        this.chainstore.BikeId = this.bikeId;
        this.frontsprocketstore.BikeId = this.bikeId;
        this.rearsprocketstore.BikeId = this.bikeId;
    }

    constructor(public appStore: AppStore) {
        super();
        makeObservable(this);        
        this.polyglot = this.appStore.polyglot;

        var kitAppStore = new AppStore(PartBrands.AFAM, this.appStore.language);
        this.kitstore = new KitStore(kitAppStore);

        var chainAppStore = new AppStore(PartBrands.Chains, this.appStore.language)
        this.chainstore = new ChainStore(chainAppStore);

        var frontAppStore = new AppStore(PartBrands.FrontSprockets, this.appStore.language)
        this.frontsprocketstore = new SprocketStore(frontAppStore);

        var rearAppStore = new AppStore(PartBrands.RearSprockets, this.appStore.language)
        this.rearsprocketstore = new SprocketStore(rearAppStore);
    }

}