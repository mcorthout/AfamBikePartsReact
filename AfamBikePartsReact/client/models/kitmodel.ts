import { DefaultKitState, KitState } from "./kitstate";
import { KitChainModel } from "./kitchainmodel";
import { SprocketModel } from "./sprocketmodel";

export class KitModel {
    public KitId: number;
    public KitBrand: string;
    public PartId: number;
    public Description: string;
    public KitName: string;
    public FrontSprocket: string;
    public FrontDefaultTeeth: number;
    public RearSprocket: string;
    public RearDefaultTeeth: number;
    public Chain: string;
    public  ChainLength: number;
    public ChainBase: string;
    public Pitch: number;
    public Material: string;
    public Kitbox: string;
    public IsStandard: number;
    public FrontMinimumTeeth: number;
    public FrontMaximumTeeth: number;
    public RearMinimumTeeth: number;
    public RearMaximumTeeth: number;
    public FrontSprockets: SprocketModel[];
    public RearSprockets: SprocketModel[];
    public Chains: KitChainModel[];
    public Language: number;
    public KitType: string;
    public CurrentState: KitState;

    constructor() {
        this.CurrentState = DefaultKitState;
    }
}
