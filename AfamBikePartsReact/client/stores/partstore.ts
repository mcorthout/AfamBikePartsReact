import * as Polyglot from "node-polyglot";
import { BikeReverseModel } from "../models";

export class PartStore {
    private _bike: number;

    public get BikeId(): number {
        return this._bike;
    }

    public set BikeId(value: number) {
        this._bike = value;
    }

    public ReversedBikes: BikeReverseModel[];

    public polyglot: Polyglot;
}
