import { AppStore } from "../appstore";
import { FilterStore } from "../filterstore";
import { PartBrands } from "../../constants";
import { FilterModel } from "../../models";
import { PartService } from "../../services/partservice";

const filter = new FilterModel();
const filters: FilterModel[] = [filter];

PartService.GetFilters = (partBrands: number, bikeId: number, language: string, done: (parts: FilterModel[]) => void) => {
    if (partBrands === PartBrands.Ison && bikeId === 1) {
        done(filters);
    }
    else {
        done([]);
    }
};

describe("FilterStore", () => {
    it("contains a list of filters for a motorbike", () => {
        const store = new FilterStore(new AppStore(PartBrands.Ison, "nl"));
        expect(store.filters).toBeDefined();
        expect(store.BikeId).toBe(0);
    });

    it("retrieves a list of filters for a motorbike", () => {
        const store = new FilterStore(new AppStore(PartBrands.Ison, "nl"));
        store.BikeId = 1;
        expect(store.hasFilters).toBeTruthy();
        expect(store.filters.length).toBe(1);
        expect(store.filters[0]).toBeInstanceOf(FilterModel);
    });
})