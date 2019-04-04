import * as Polyglot from "node-polyglot";
import { BikeReverseModel } from "../models";

export class PartStore {
    public BikeId: number;
    public ReversedBikes: BikeReverseModel[];
    public polyglot: Polyglot;
}
