import { BikeReverseModel } from "../models";

export class ReverseService {

    public static GetBikes(partid: number, done: (parts: BikeReverseModel[]) => void): void {
        ReverseService.Get<BikeReverseModel[]>(`https://service.afam.com/api/reverse/${partid}`, done, []);
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
