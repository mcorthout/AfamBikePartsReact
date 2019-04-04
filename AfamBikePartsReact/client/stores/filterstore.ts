import { action, computed, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { AppStore } from "./appstore";
import { PartStore } from "./partstore";
import { FilterModel, BikeReverseModel } from "../models";
import { PartService, ReverseService } from "../services";

export class FilterStore extends PartStore {

    public polyglot: Polyglot;

    @observable
    public filters: FilterModel[];

    /* Image modal */
    @observable
    public FilterImageTitle: string;

    @observable
    public FilterImageModalVisible: boolean;

    @observable
    public FilterImageUrl: string;

    public HideFilterImage(): void {
        document.body.classList.remove("modal-showing");
        this.FilterImageModalVisible = false;
        this.FilterImageTitle = "";
    }

    public ShowFilterImage(filter: FilterModel, url: string): void {
        this.FilterImageTitle = filter.Part;
        this.FilterImageUrl = url;
        this.FilterImageModalVisible = true;
    }

    /* Drawing modal */
    @observable
    public FilterDrawingModalVisible: boolean;

    @observable
    public FilterDrawingUrl: string;

    public HideFilterDrawing(): void {
        document.body.classList.remove("modal-showing");
        this.FilterDrawingModalVisible = false;
        this.FilterImageTitle = "";
    }

    public ShowFilterDrawing(filter: FilterModel, url: string): void {
        this.FilterImageTitle = filter.Part;
        this.FilterDrawingUrl = url;
        this.FilterDrawingModalVisible = true;
    } 

    /* Reverse applications */
    @observable
    public FilterReverseTitle: string;

    @observable
    public FilterReverseModalVisible: boolean;

    @observable
    public ReversedBikes: BikeReverseModel[];

    public HideReversedBikes(): void {
        document.body.classList.remove("modal-showing");
        this.FilterReverseModalVisible = false;
        this.ReversedBikes = [];
        this.FilterReverseTitle = "";
    }

    public ShowReversedBikes(filter: FilterModel): void {
        this.ReversedBikes = [];
        this.FilterReverseTitle = filter.Part;
        ReverseService.GetBikes(filter.PartId, this.updateReverseBikes);
    }

    @action
    private updateReverseBikes(newBikes: BikeReverseModel[]): void {
        this.ReversedBikes = newBikes;
        this.FilterReverseModalVisible = true;
    }

    private bikeId: number;

    constructor(public appStore: AppStore) {
        super();

        this.filters = [];
        this.bikeId = 0;
        this.polyglot = this.appStore.polyglot;

        this.FilterImageTitle = "";
        this.FilterImageModalVisible = false;
        this.FilterImageUrl = "";
        this.FilterDrawingModalVisible = false;
        this.FilterDrawingUrl = "";

        this.FilterReverseModalVisible = false;
        this.ReversedBikes = [];
        this.FilterReverseTitle = "";

        this.updateFilters = this.updateFilters.bind(this);
        this.updateReverseBikes = this.updateReverseBikes.bind(this);
    }

    @computed
    public get hasFilters(): boolean {
        if (this.filters) {
            return this.filters.length !== 0;
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
        this.getFilters();
    }

    @action
    private getFilters(): void {
        if (this.bikeId !== 0) {
            PartService.GetFilters(this.appStore.parts, this.bikeId, this.appStore.language, this.updateFilters);
        } else {
            this.updateFilters([]);
        }
    }

    @action
    private updateFilters(newFilters: FilterModel[]): void {
        this.filters = newFilters;
    }

}
