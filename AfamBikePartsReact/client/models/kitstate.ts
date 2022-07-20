import { KitChainModel, DefaultKitChain } from "./kitchainmodel";
import { DefaultSprocket, SprocketModel } from "./sprocketmodel";

export const DefaultKitState: KitState = {
    CurrentChains: [DefaultKitChain],
    CurrentChainLength: 0,
    SelectedChain: DefaultKitChain,
    SelectedFrontSprocket: DefaultSprocket,
    SelectedRearSprocket: DefaultSprocket,
};

export class KitState {
    public CurrentChains: KitChainModel[];
    public CurrentChainLength: number;
    public SelectedChain: KitChainModel;
    public SelectedFrontSprocket: SprocketModel;
    public SelectedRearSprocket: SprocketModel;
}
