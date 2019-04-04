import { AppStore } from "../appstore";
import { KitStore } from "../kitstore";
import { BatteryStore } from "../batterystore";
import { PartBrands } from "../../constants";
import { FilterStore } from "../filterstore";

describe("AppStore", () => {
    it("creates a bike and parts store", () => {
        const store = new AppStore(PartBrands.AFAM, "nl");
        expect(store.bikeStore).toBeDefined();
        expect(store.partStore).toBeDefined();
    });   

    it("creates parts store for kits if the parts are kits", () => {
        const store = new AppStore(PartBrands.AFAM, "nl");
        expect(store.partStore).toBeInstanceOf(KitStore);
    });  

    it("creates parts store for batteries if the parts are batteries", () => {
        const store = new AppStore(PartBrands.Shido, "nl");
        expect(store.partStore).toBeInstanceOf(BatteryStore);
    });  

    it("creates parts store for filters if the parts are filters", () => {
        const store = new AppStore(PartBrands.Ison, "nl");
        expect(store.partStore).toBeInstanceOf(FilterStore);
    });
})