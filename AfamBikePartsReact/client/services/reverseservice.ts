import axios from "axios";
import { BikeReverseModel } from "../models";

export class ReverseService {

    public static GetBikes(partid: number, done: (parts: BikeReverseModel[]) => void): void {
        ReverseService.Get<BikeReverseModel[]>(`https://service.afam.com/api/reverse/${partid}`, done, []);
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
