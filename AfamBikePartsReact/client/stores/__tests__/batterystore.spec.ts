import { AppStore } from "../appstore";
import { BatteryStore } from "../batterystore";
import { PartBrands } from "../../constants";
import { BatteryModel } from "../../models";
import { PartService } from "../../services/partservice";

const battery = new BatteryModel();
const batteries: BatteryModel[] = [battery];

PartService.GetBatteries = (partBrands: number, bikeId: number, language: string, done: (parts: BatteryModel[]) => void) => {
    if (partBrands === PartBrands.Shido && bikeId === 1) {
        done(batteries);
    }
    else {
        done([]);
    }
};

describe("BatteryStore", () => {
    it("contains a list of batteries for a motorbike", () => {
        const store = new BatteryStore(new AppStore(PartBrands.Shido, "nl"));
        expect(store.batteries).toBeDefined();
        expect(store.BikeId).toBe(0);
    });

    it("retrieves a list of batteries for a motorbike", () => {
        const store = new BatteryStore(new AppStore(PartBrands.Shido, "nl"));
        store.BikeId = 1;
        expect(store.hasBatteries).toBeTruthy();
        expect(store.batteries.length).toBe(1);
        expect(store.batteries[0]).toBeInstanceOf(BatteryModel);
    });
})