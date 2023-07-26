import { AppStore } from "../appstore";
import { KitStore } from "../kitstore";
import { PartBrands } from "../../constants";

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
})