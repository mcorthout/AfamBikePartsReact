import { ChainModel, DefaultChain } from "./chainmodel";
import { DefaultSprocket, SprocketModel } from "./sprocketmodel";

export const DefaultKitState: KitState = {
    CurrentChains: [DefaultChain],
    CurrentChainLength: 0,
    SelectedChain: DefaultChain,
    SelectedFrontSprocket: DefaultSprocket,
    SelectedRearSprocket: DefaultSprocket,
};

export class KitState {
    public CurrentChains: ChainModel[];
    public CurrentChainLength: number;
    public SelectedChain: ChainModel;
    public SelectedFrontSprocket: SprocketModel;
    public SelectedRearSprocket: SprocketModel;
}
