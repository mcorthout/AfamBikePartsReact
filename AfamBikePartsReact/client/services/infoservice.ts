import axios from "axios";
import { ChainInfoModel } from "../models";

export class InfoService {

    public static GetChainInfo(chainName: string, language: string = "en", done: (info: ChainInfoModel | undefined) => void): void {
        InfoService.Get<ChainInfoModel | undefined>(`https://service.afam.com/api/info/chain/${chainName}/${language}`, done, undefined);
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
