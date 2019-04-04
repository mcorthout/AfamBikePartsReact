export const DefaultChain: ChainModel = {
    ChainType: "",
    ChainColor: "",
    ChainBaseName: "",
    ChainOrder: 0,
    IsStandard: 0,
    Length: 0,
    FullName: "",
};

export class ChainModel {
    public ChainType: string;
    public ChainColor: string;
    public ChainBaseName: string;
    public ChainOrder: number;
    public IsStandard: number;
    public Length: number;
    public FullName: string;
}
