import axios from "axios";
import { ChainInfoModel, KitModel, SprocketListModel } from "../models";
import { ApplicationHost } from "../constants";

export class PartService {

    public static GetKits(partBrands: number, bikeId: number, language: string = "en", done: (parts: KitModel[]) => void): void {
        PartService.Get<KitModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetChains(partBrands: number, bikeId: number, language: string = "en", done: (parts: ChainInfoModel[]) => void): void {
        PartService.Get<ChainInfoModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    public static GetSprockets(partBrands: number, bikeId: number, language: string = "en", done: (parts: SprocketListModel[]) => void): void {
        PartService.Get<SprocketListModel[]>(`${ApplicationHost}/${partBrands}/bike/${bikeId}/${language}`, done, []);
    }

    private static Get<T>(URL: string, done: (values: T) => void, errorValue: T): void {
        axios
            .get(URL)
            .then((response) => {
                done(response.data);
            })
            .catch(() => done(errorValue));
    }

}
