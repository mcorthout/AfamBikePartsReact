import axios from "axios";
import { BatteryModel, FilterModel, KitModel } from "../models";

export class PartService {

    public static GetKits(partBrands: number, bikeId: number, language: string = "en", done: (parts: KitModel[]) => void): void {
        PartService.Get<KitModel[]>(`https://service.afam.com/api/applications/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetBatteries(partBrands: number, bikeId: number, language: string = "en", done: (parts: BatteryModel[]) => void): void {
        PartService.Get<BatteryModel[]>(`https://service.afam.com/api/applications/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetFilters(partBrands: number, bikeId: number, language: string = "en", done: (parts: FilterModel[]) => void): void {
        PartService.Get<FilterModel[]>(`https://service.afam.com/api/applications/${partBrands}/bike/${bikeId}/${language}`, done, []);
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
