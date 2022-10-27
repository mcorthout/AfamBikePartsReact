import * as Polyglot from "node-polyglot";
import { Translations } from "../translations";
import { BikeStore } from "./bikestore";
import { PartStore } from "./partstore";
import { KitStore } from "./kitstore";
import { BatteryStore } from "./batterystore";
import { FilterStore } from "./filterstore";
import { PartBrands } from "../constants";
import { ChainStore } from "./chainstore";
import { SprocketStore } from "./sprocketstore";

export class AppStore {
    public polyglot: Polyglot;
    public bikeStore: BikeStore;
    public partStore: PartStore;

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
        /* tslint:disable:no-bitwise */
        if (((parts & PartBrands.AFAM) !== 0) ||
            ((parts & PartBrands.DC) !== 0) ||
            ((parts & PartBrands.Threed) !== 0)) {
            this.partStore = new KitStore(this);
        }
        else if (((parts & PartBrands.Shido) !== 0) || ((parts & PartBrands.Nitro) !== 0)) {
            this.partStore = new BatteryStore(this);
        }
        else if (((parts & PartBrands.Ison) !== 0) || ((parts & PartBrands.MIW) !== 0)) {
            this.partStore = new FilterStore(this);
        }
        else if ((parts & PartBrands.Chains) !== 0) {
            this.partStore = new ChainStore(this);
        }
        else if ((parts & PartBrands.FrontSprockets) !== 0 || (parts & PartBrands.RearSprockets) !== 0) {
            this.partStore = new SprocketStore(this);
        }
        else {
            this.partStore = new PartStore();
        }
        /* tslint:enable:no-bitwise */
    }

    public get BikeId(): number {
        return this.bikeId;
    }

    public set BikeId(value: number) {
        this.bikeId = value;

        if (this.partStore) {
            this.partStore.BikeId = this.bikeId;
        }
    }
}

export default AppStore;