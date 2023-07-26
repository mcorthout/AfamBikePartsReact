import * as Polyglot from "node-polyglot";
import { Translations } from "../translations";
import { BikeStore } from "./bikestore";
import { KitStore } from "./kitstore";

export class AppStore {
    public polyglot: Polyglot;
    public bikeStore: BikeStore;
    public kitStore: KitStore;

    private bikeId: number;

    constructor(public parts: number = 1, public language: string = "en") {
        // Configure polyglot
        let translationTable = Translations[language];

        if (!translationTable) {
            translationTable = Translations.en;
        }

        this.polyglot = new Polyglot({
            locale: language,
            phrases: translationTable,
        });

        // Create the bike store
        this.bikeStore = new BikeStore(this);

        // Create the parts store
        this.kitStore = new KitStore(this);
    }

    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;

        if (this.kitStore) {
            this.kitStore.BikeId = this.bikeId;
        }
    }
}

export default AppStore;