import * as Polyglot from "node-polyglot";
import { BikeReverseModel } from "../models/bikereversemodel";

export interface PartStore {
    get BikeId(): number;
    set BikeId(value: number);

    polyglot: Polyglot;

    ReversedBikes?: BikeReverseModel[];
}
