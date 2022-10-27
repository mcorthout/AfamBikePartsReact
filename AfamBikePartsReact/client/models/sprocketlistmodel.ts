export const DefaultSprocket: SprocketListModel = {
    CatalogNumber: "",
    Ean: "",
    Description: "",
    PartId: 0,
    Side: "",
    Teeth: 0,
    Pitch: 0,
    Material: "",
    Drawing: ""
};

export class SprocketListModel {
    public CatalogNumber: string;
    public Ean: string;
    public Description: string;
    public PartId: number;
    public Side: string;
    public Teeth: number;
    public Pitch: number;
    public Material: string;
    public Drawing: string;
}
