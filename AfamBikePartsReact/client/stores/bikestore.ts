import { action, observable } from "mobx";
import * as Polyglot from "node-polyglot";
import { AppStore } from "./appstore";
import { BikeModel } from "../models";
import { BikeService } from "../services";

export class BikeStore {

    @observable
    public bike: BikeModel;

    private partbrand: number;
    private language: string;
    private polyglot: Polyglot;

    constructor(public appStore: AppStore) {
        this.bike = new BikeModel();

        this.selectBrand = this.selectBrand.bind(this);
        this.selectCc = this.selectCc.bind(this);
        this.selectModel = this.selectModel.bind(this);
        this.selectYear = this.selectYear.bind(this);

        this.updateBrands = this.updateBrands.bind(this);
        this.updateCcs = this.updateCcs.bind(this);
        this.updateModels = this.updateModels.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateBikes = this.updateBikes.bind(this);

        this.partbrand = this.appStore.parts;

        this.language = this.appStore.language;
        this.polyglot = this.appStore.polyglot;

        BikeService.GetBrands(this.partbrand, this.bike, this.updateBrands);
    }

    @action
    private updateBrands(brands: string[]): void {

        if (brands.length > 1) {
            brands.unshift(this.polyglot.t("SelectBrand"));
        }

        this.bike.brands = brands;
        this.bike.selectedBrand = brands[0];

        if (brands.length === 1) {
            this.selectBrand(this.bike.selectedBrand);
        }
    }

    @action
    public selectBrand(brand: string): void {
        this.bike.selectedBrand = brand;

        this.bike.ccs = [];
        this.bike.selectedCc = "";

        this.bike.models = [];
        this.bike.selectedModel = "";

        this.bike.years = [];
        this.bike.selectedYear = "";

        this.appStore.BikeId = 0;

        BikeService.GetCCs(this.partbrand, this.bike, this.updateCcs);
    }

    @action
    private updateCcs(ccs: string[]): void {

        if (ccs.length > 1) {
            ccs.unshift(this.polyglot.t("SelectCc"));
        }

        this.bike.ccs = ccs;
        this.bike.selectedCc = ccs[0];

        if (ccs.length === 1) {
            this.selectCc(this.bike.selectedCc);
        }
    }

    @action
    public selectCc(cc: string): void {
        this.bike.selectedCc = cc;

        this.bike.models = [];
        this.bike.selectedModel = "";

        this.bike.years = [];
        this.bike.selectedYear = "";

        this.appStore.BikeId = 0;

        BikeService.GetModels(this.partbrand, this.bike, this.updateModels);
    }

    @action
    private updateModels(models: string[]): void {
        if (models.length > 1) {
            models.unshift(this.polyglot.t("SelectModel"));
        }

        this.bike.models = models;
        this.bike.selectedModel = models[0];

        if (models.length === 1) {
            this.selectModel(this.bike.selectedModel);
        }
    }

    @action
    public selectModel(model: string): void {

        this.bike.selectedModel = model;

        this.bike.years = [];
        this.bike.selectedYear = "";

        this.appStore.BikeId = 0;

        BikeService.GetYears(this.partbrand, this.bike, this.updateYears);
    }

    @action
    private updateYears(years: string[]): void {
        if (years.length > 1) {
            years.unshift(this.polyglot.t("SelectYear"));
        }

        this.bike.years = years;
        this.bike.selectedYear = years[0];

        if (years.length === 1) {
            this.selectYear(this.bike.selectedYear);
        }
    }

    @action
    public selectYear(year: string): void {
        this.bike.selectedYear = year;

        this.appStore.BikeId = 0;

        BikeService.GetBikes(this.partbrand, this.bike, this.language, this.updateBikes);
    }

    @action
    private updateBikes(bikes: number[]): void {
        this.appStore.BikeId = (bikes.length > 0) ? bikes[0] : 0;
    }
}

export default BikeStore;
