import { observable } from "mobx";

export class BikeModel {

    @observable public brands: string[];
    @observable public selectedBrand: string;

    @observable public ccs: string[];
    @observable public selectedCc: string;

    @observable public models: string[];
    @observable public selectedModel: string;

    @observable public years: string[];
    @observable public selectedYear: string;

    constructor() {

      this.brands = [];
      this.selectedBrand = "";

      this.ccs = [];
      this.selectedCc = "";

      this.models = [];
      this.selectedModel = "";

      this.years = [];
      this.selectedYear = "";
    }

}

export default BikeModel;
