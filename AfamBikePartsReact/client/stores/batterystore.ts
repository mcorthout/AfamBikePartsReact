import { action, computed, makeObservable, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { BatteryModel, BikeReverseModel } from "../models";
import { PartService, ReverseService } from "../services";
import { AppStore } from "./appstore";
import { PartStore } from "./partstore";
import { ProductImageBase } from "../constants";

export class BatteryStore extends PartStore {
    //Provide translations
    public polyglot: Polyglot;

    // The list of batteries managed by this store
    @observable
    public batteries: BatteryModel[];

    // A modal to display a photo of a specific battery
    @observable
    public BatteryImageTitle: string;

    @observable
    public BatteryImageModalVisible: boolean;

    @observable
    public BatteryImageUrl: string;

    @action
    public HideBatteryImage(): void {
        document.body.classList.remove("modal-showing");
        this.BatteryImageModalVisible = false;
        this.BatteryImageTitle = "";
    }

    @action
    public ShowBatteryImage(battery: BatteryModel): void {
        this.BatteryImageUrl = battery.Photo;
        this.BatteryImageTitle = battery.Part;
        this.BatteryImageModalVisible = true;
    }

    // A modal to display extra technical information regarding a specific battery
    @observable
    public BatteryInfoModalVisible: boolean;

    @observable
    public BatteryInfo: BatteryModel;

    @action
    public HideBatteryInfo(): void {
        document.body.classList.remove("modal-showing");
        this.BatteryInfoModalVisible = false;
    }

    @action
    public ShowBatteryInfo(battery: BatteryModel): void {
        this.BatteryInfo = battery;
        this.BatteryInfoModalVisible = true;
    }

    // A modal to display a list of bikes in which a specific battery would also fit
    @observable
    public BatteryReverseTitle: string;

    @observable
    public BatteryReverseModalVisible: boolean;

    @observable
    public ReversedBikes: BikeReverseModel[];

    @action
    public HideReversedBikes(): void {
        document.body.classList.remove("modal-showing");
        this.BatteryReverseModalVisible = false;
        this.ReversedBikes = [];
        this.BatteryReverseTitle = "";
    }

    @action
    public ShowReversedBikes(battery: BatteryModel): void {
        this.ReversedBikes = [];
        this.BatteryReverseTitle = battery.Part;
        ReverseService.GetBikes(battery.PartId, this.updateReverseBikes);
    }

    @action
    private updateReverseBikes(newBikes: BikeReverseModel[]): void {
        this.ReversedBikes = newBikes;
        this.BatteryReverseModalVisible = true;
    }

    // Determine whether or not this store contains batteries
    @computed
    public get hasBatteries(): boolean {
        if (this.batteries) {
            return this.batteries.length !== 0;
        } else {
            return false;
        }
    }

    // The motorbike id for which this store manages batteries
    private bikeId: number;

    @computed
    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;
        this.getBatteries();
    }

    // Request a new list of batteries
    @action
    private getBatteries(): void {
        if (this.bikeId !== 0) {
            PartService.GetBatteries(this.appStore.parts, this.bikeId, this.appStore.language, this.updateBatteries);
        } else {
            this.updateBatteries([]);
        }
    }

    // Process the retrieved list of batteries
    @action
    private updateBatteries(newBatteries: BatteryModel[]): void {
        for (const battery of newBatteries) {            
            battery.PolarityDrawing = ProductImageBase + "batteries/polarity/polarity_location_" + battery.PolarityLocation + ".png";
            battery.ExhaustDrawing = ProductImageBase + "/batteries/exhaust/exhaust_" + battery.ExhaustPosition + ".png";
            battery.TerminalTop = ProductImageBase + "batteries/terminal/t" + battery.TerminalType + "t.png";
            battery.TerminalFront = ProductImageBase + "batteries/terminal/t" + battery.TerminalType + "f.png";
            battery.TerminalSide = ProductImageBase + "batteries/terminal/t" + battery.TerminalType + "s.png";
        }

        this.batteries = newBatteries;
    }

    // Create a new store
    constructor(public appStore: AppStore) {
        super();

        makeObservable(this);

        this.batteries = [];
        this.bikeId = 0;
        this.polyglot = this.appStore.polyglot;

        this.BatteryImageModalVisible = false;
        this.BatteryImageUrl = "";
        this.BatteryImageTitle = "";

        this.BatteryInfoModalVisible = false;
        this.BatteryInfo = new BatteryModel();

        this.BatteryReverseModalVisible = false;
        this.ReversedBikes = [];
        this.BatteryReverseTitle = "";

        this.updateBatteries = this.updateBatteries.bind(this);
        this.updateReverseBikes = this.updateReverseBikes.bind(this);
    }
}