import axios from "axios";
import { BatteryModel, ChainInfoModel, FilterModel, KitModel } from "../models";
import { ApplicationHost } from "../constants";

export class PartService {

    public static GetKits(partBrands: number, bikeId: number, language: string = "en", done: (parts: KitModel[]) => void): void {
        PartService.Get<KitModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetBatteries(partBrands: number, bikeId: number, language: string = "en", done: (parts: BatteryModel[]) => void): void {
        PartService.Get<BatteryModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetFilters(partBrands: number, bikeId: number, language: string = "en", done: (parts: FilterModel[]) => void): void {
        PartService.Get<FilterModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetChains(partBrands: number, bikeId: number, language: string = "en", done: (parts: ChainInfoModel[]) => void): void {
        PartService.Get<ChainInfoModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    private static Get<T>(URL: string, done: (values: T) => void, errorValue: T): void {
        axios
            .get(URL)
            .then((response) => {
                done(response.data);
            })
            .catch((error) => done(errorValue));
    }

}
