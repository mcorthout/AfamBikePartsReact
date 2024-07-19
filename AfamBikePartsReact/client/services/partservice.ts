import { BatteryModel, ChainInfoModel, FilterModel, KitModel, SprocketListModel } from "../models";
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

    public static GetSprockets(partBrands: number, bikeId: number, language: string = "en", done: (parts: SprocketListModel[]) => void): void {
        PartService.Get<SprocketListModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    private static Get<T>(URL: string, done: (values: T) => void, errorValue: T): void {
        fetch(URL)
            .then(async (response) => {
                if (response.ok) {
                    done(await response.json());
                }
                else {
                    done(errorValue);
                }
            })
            .catch((error) => done(errorValue));
    }

}
