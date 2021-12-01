import { AppStore } from "../appstore";
import { KitStore } from "../kitstore";
import { PartBrands } from "../../constants";
import { DefaultKitState, KitModel } from "../../models";
import { PartService } from "../../services/partservice";

const kit: KitModel = new KitModel();

kit.KitId = 1;
kit.KitBrand = "AFAM";
kit.PartId = 1;
kit.Description = "Kit";
kit.KitName = "1234";
kit.FrontSprocket = "1234-12";
kit.FrontDefaultTeeth = 12;
kit.RearSprocket = "9876-40";
kit.RearDefaultTeeth = 40;
kit.Chain = "CHAIN 120L";
kit.ChainLength = 120;
kit.ChainBase = "CHAIN";
kit.Pitch = 520;
kit.Material = "S";
kit.Kitbox = "BOX";
kit.IsStandard = 1;
kit.FrontMinimumTeeth = 10;
kit.FrontMaximumTeeth = 14;
kit.RearMinimumTeeth = 38;
kit.RearMaximumTeeth = 42;
kit.FrontSprockets = [
    {
        SprocketName: "1234-11",
        PartId: 0,
        Side: "F",
        Base: "1234",
        Teeth: 11,
    },
    {
        SprocketName: "1234-12",
        PartId: 0,
        Side: "F",
        Base: "1234",
        Teeth: 12,
    },
    {
        SprocketName: "1234-13",
        PartId: 0,
        Side: "F",
        Base: "1234",
        Teeth: 13,
    }];
kit.RearSprockets = [
    {
        SprocketName: "9876-39",
        PartId: 0,
        Side: "R",
        Base: "9876",
        Teeth: 39,
    },
    {
        SprocketName: "9876-40",
        PartId: 0,
        Side: "R",
        Base: "9876",
        Teeth: 40,
    },
    {
        SprocketName: "9876-41",
        PartId: 0,
        Side: "R",
        Base: "9876",
        Teeth: 41,
    }];
kit.Chains = [{
    ChainType: "CHAIN",
    ChainColor: "G",
    ChainBaseName: "CHAIN",
    ChainOrder: 0,
    IsStandard: 0,
    Length: 120,
    FullName: "CHAIN 120L",
}];
kit.Language = 1;
kit.KitType = "";
kit.CurrentState = DefaultKitState;

const kits: KitModel[] = [kit];

PartService.GetKits = (partBrands: number, bikeId: number, language: string, done: (parts: KitModel[]) => void) => {
    if (partBrands === PartBrands.AFAM && bikeId === 1) {
        done(kits);
    }
    else {
        done([]);
    }
};

describe("KitStore", () => {
    it("contains a list of kits for a motorbike", () => {
        const store = new KitStore(new AppStore(PartBrands.AFAM, "nl"));
        expect(store.kits).toBeDefined();
        expect(store.BikeId).toBe(0);
    });

    it("retrieves a list of kits if the motorbike id is changed", () => {
        const store = new KitStore(new AppStore(PartBrands.AFAM, "nl"));
        store.BikeId = 1;
        expect(store.hasKits).toBeTruthy();
        expect(store.kits.length).toBe(1);
        expect(store.kits[0]).toBeInstanceOf(KitModel);
    });

    it("potentially changes chain length if changing the front sprocket", () => {
        const store = new KitStore(new AppStore(PartBrands.AFAM, "nl"));
        store.BikeId = 1;
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(120);

        store.handleSprocketChange(store.kits[0], "front", {
            SprocketName: "1234-11",
            PartId: 0,
            Side: "F",
            Base: "1234",
            Teeth: 11,
        })
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(120);

        store.handleSprocketChange(store.kits[0], "front", {
            SprocketName: "1234-13",
            PartId: 0,
            Side: "F",
            Base: "1234",
            Teeth: 13,
        })
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(122);
    });

    it("potentially changes chain length if changing the rear sprocket", () => {
        const store = new KitStore(new AppStore(PartBrands.AFAM, "nl"));
        store.BikeId = 1;
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(120);

        store.handleSprocketChange(store.kits[0], "rear", {
            SprocketName: "9876-39",
            PartId: 0,
            Side: "R",
            Base: "9876",
            Teeth: 39,
        })
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(120);

        store.handleSprocketChange(store.kits[0], "rear", {
            SprocketName: "9876-41",
            PartId: 0,
            Side: "R",
            Base: "9876",
            Teeth: 41,
        })
        expect(store.kits[0].CurrentState.CurrentChainLength).toBe(122);
    });
})