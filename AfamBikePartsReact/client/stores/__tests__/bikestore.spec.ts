import { AppStore } from "../appstore";
import { BikeStore } from "../bikestore";
import { BikeService } from "../../services/bikeservice";
import { BikeModel } from "../../models";
import { PartBrands } from "../../constants";

BikeService.GetBrands = (parts: number, bike: BikeModel, done: (brands: string[]) => void): void => {
    done(["A", "B"]);
}

BikeService.GetCCs = (parts: number, bike: BikeModel, done: (ccs: string[]) => void): void => {
    if (bike.selectedBrand == "A") {
        done(["CC1"]);
    }
    else if (bike.selectedBrand == "B") {
        done(["CC2", "CC3"]);
    }
    else {
        done([]);
    }    
}

BikeService.GetModels = (parts: number, bike: BikeModel, done: (models: string[]) => void): void => {
    if (bike.selectedCc == "CC1") {
        done(["M1",]);
    }
    else if (bike.selectedCc == "CC3") {
        done(["M2", "M3"]);
    }
    else {
        done([]);
    }    
}

BikeService.GetYears = (parts: number, bike: BikeModel, done: (years: string[]) => void): void => {
    if (bike.selectedModel == "M1") {
        done(["Y1"]);
    }
    else if (bike.selectedModel == "M3") {
        done(["Y2", "Y3"]);
    }
    else {
        done([]);
    }    
}

BikeService.GetBikes = (parts: number, bike: BikeModel, language: string = "en", done: (parts: number[]) => void): void => {
    if (bike.selectedYear == "Y1") {
        done([1]);
    }
    else if (bike.selectedYear == "Y3") {
        done([2, 3]);
    }
    else {
        done([]);
    }  
}


describe("BikeStore", () => {
    it("contains a list of bike brands", () => {
        const store = new BikeStore(new AppStore(PartBrands.AFAM, "nl"));
        expect(store.bike).toBeDefined();
        expect(store.bike.brands.length).toBe(2 + 1); // Plus extra <Select a brand> option if more than one brand
    });

    it("retrieves a list of ccs", () => {
        const store = new BikeStore(new AppStore(PartBrands.AFAM, "nl"));
        store.selectBrand("A");
        expect(store.bike.ccs.length).toBe(1); // No extra <Select a cc> option if only one possibility
        store.selectBrand("B");
        expect(store.bike.ccs.length).toBe(2 + 1); // Plus extra <Select a cc> option if more than one cc
    });

    it("retrieves a list of models", () => {
        const store = new BikeStore(new AppStore(PartBrands.AFAM, "nl"));
        store.selectCc("CC1");
        expect(store.bike.models.length).toBe(1);
        store.selectCc("CC3");
        expect(store.bike.models.length).toBe(2 + 1);
    });

    it("retrieves a list of years", () => {
        const store = new BikeStore(new AppStore(PartBrands.AFAM, "nl"));
        store.selectModel("M1");
        expect(store.bike.years.length).toBe(1);
        store.selectModel("M3");
        expect(store.bike.years.length).toBe(2 + 1);
    });

    it("retrieves a list of bike id's for the appstore", () => {
        const appStore = new AppStore(9999, "nl");
        const store = new BikeStore(appStore);
        store.selectYear("Y1");
        expect(appStore.BikeId).toBe(1);
        store.selectYear("Y3");
        expect(appStore.BikeId).toBe(2);
    });

    it("loads cc's and clears models, years and appstore BikeId if a different brand is selected", () => {
        const appStore = new AppStore(9999, "nl");
        const store = new BikeStore(appStore);
        store.selectBrand("A");
        store.selectCc("CC1");
        store.selectModel("M1");
        store.selectYear("Y1");
        expect(store.bike.ccs.length).toBe(1);
        expect(store.bike.models.length).toBe(1);
        expect(store.bike.years.length).toBe(1);
        expect(appStore.BikeId).toBe(1);

        store.selectBrand("B");
        expect(store.bike.ccs.length).toBe(2 + 1);
        expect(store.bike.models.length).toBe(0);
        expect(store.bike.years.length).toBe(0);
        expect(appStore.BikeId).toBe(0);
    });

    it("loads models and clears years and appstore BikeId if a different cc is selected", () => {
        const appStore = new AppStore(9999, "nl");
        const store = new BikeStore(appStore);
        store.selectBrand("A");
        store.selectCc("CC1");
        store.selectModel("M1");
        store.selectYear("Y1");
        expect(store.bike.ccs.length).toBe(1);
        expect(store.bike.models.length).toBe(1);
        expect(store.bike.years.length).toBe(1);
        expect(appStore.BikeId).toBe(1);

        store.selectBrand("B");
        store.selectCc("CC3");
        expect(store.bike.models.length).toBe(2 + 1);
        expect(store.bike.years.length).toBe(0);
        expect(appStore.BikeId).toBe(0);
    });

    it("loads years and clears appstore BikeId if a different model is selected", () => {
        const appStore = new AppStore(9999, "nl");
        const store = new BikeStore(appStore);
        store.selectBrand("A");
        store.selectCc("CC1");
        store.selectModel("M1");
        store.selectYear("Y1");
        expect(store.bike.ccs.length).toBe(1);
        expect(store.bike.models.length).toBe(1);
        expect(store.bike.years.length).toBe(1);
        expect(appStore.BikeId).toBe(1);

        store.selectBrand("B");
        store.selectCc("CC3");
        store.selectModel("M3");
        expect(store.bike.years.length).toBe(2 + 1);
        expect(appStore.BikeId).toBe(0);
    });
})