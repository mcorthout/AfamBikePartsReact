import { AppStore } from "../appstore";
import { KitStore } from "../kitstore";
import { BatteryStore } from "../batterystore";
import { PartBrands } from "../../constants";
import { FilterStore } from "../filterstore";
import { ChainStore } from "../chainstore";
import { SprocketStore } from "../sprocketstore";
import { TransmissionStore } from "../transmissionstore";

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

    it("creates parts store for chains if the parts are chains", () => {
        const store = new AppStore(PartBrands.Chains, "nl");
        expect(store.partStore).toBeInstanceOf(ChainStore);
    });

    it("creates parts store for sprockets if the parts are front sprockets", () => {
        const store = new AppStore(PartBrands.FrontSprockets, "nl");
        expect(store.partStore).toBeInstanceOf(SprocketStore);
    });

    it("creates parts store for sprockets if the parts are rear sprockets", () => {
        const store = new AppStore(PartBrands.RearSprockets, "nl");
        expect(store.partStore).toBeInstanceOf(SprocketStore);
    });

    it("creates parts store for transmission parts if the parts are transmission parts", () => {
        const store = new AppStore(PartBrands.Transmission, "nl");
        expect(store.partStore).toBeInstanceOf(TransmissionStore);
    });
})