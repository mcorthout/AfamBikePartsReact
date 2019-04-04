import axios from "axios";
import { BikeModel } from "../models";

export class BikeService {

    public static GetBrands(parts: number, bike: BikeModel, done: (brands: string[]) => void): void {
        BikeService.Get<string[]>(`https://service.afam.com/api/applications/${parts}`, done, []);
    }

    public static GetCCs(parts: number, bike: BikeModel, done: (ccs: string[]) => void): void {
        BikeService.Get<string[]>(`https://service.afam.com/api/applications/${parts}?brand=${bike.selectedBrand}`, done, []);
    }

    public static GetModels(parts: number, bike: BikeModel, done: (models: string[]) => void): void {
        BikeService.Get<string[]>(`https://service.afam.com/api/applications/${parts}?brand=${bike.selectedBrand}&cc=${bike.selectedCc}`, done, []);
    }

    public static GetYears(parts: number, bike: BikeModel, done: (years: string[]) => void): void {
        BikeService.Get<string[]>(`https://service.afam.com/api/applications/${parts}?brand=${bike.selectedBrand}&cc=${bike.selectedCc}&model=${bike.selectedModel}`, done, []);
    }

    public static GetBikes(parts: number, bike: BikeModel, language: string = "en", done: (bikes: number[]) => void): void {
        BikeService.Get<number[]>(`https://service.afam.com/api/applications/${parts}/bikes?brand=${bike.selectedBrand}&cc=${bike.selectedCc}&model=${bike.selectedModel}&year=${bike.selectedYear}&language=${language}`, done, []);
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
