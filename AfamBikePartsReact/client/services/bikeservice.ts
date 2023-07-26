import axios from "axios";
import { BikeModel } from "../models";
import { ApplicationHost } from "../constants";

export class BikeService {

    public static GetBrands(parts: number, bike: BikeModel, done: (brands: string[]) => void): void {
        BikeService.Get<string[]>(`${ApplicationHost}/${parts}`, done, []);
    }

    public static GetCCs(parts: number, bike: BikeModel, done: (ccs: string[]) => void): void {
        BikeService.Get<string[]>(`${ApplicationHost}/${parts}/${bike.selectedBrand}`, done, []);
    }

    public static GetModels(parts: number, bike: BikeModel, done: (models: string[]) => void): void {
        BikeService.Get<string[]>(`${ApplicationHost}/${parts}/${bike.selectedBrand}/${bike.selectedCc}`, done, []);
    }

    public static GetYears(parts: number, bike: BikeModel, done: (years: string[]) => void): void {
        BikeService.Get<string[]>(`${ApplicationHost}/${parts}/${bike.selectedBrand}/${bike.selectedCc}/${bike.selectedModel}`, done, []);
    }

    public static GetBikes(parts: number, bike: BikeModel, language: string = "en", done: (bikes: number[]) => void): void {
        BikeService.Get<number[]>(`${ApplicationHost}/${parts}/bikes/${bike.selectedBrand}/${bike.selectedCc}/${bike.selectedModel}/${bike.selectedYear}/${language}`, done, []);
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
