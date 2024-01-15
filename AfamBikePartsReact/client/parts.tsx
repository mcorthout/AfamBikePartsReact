import * as React from "react";
import { observer } from "mobx-react";
import { AppStore, BatteryStore, FilterStore, KitStore, ChainStore, SprocketStore, TransmissionStore } from "./stores";
import { BikeSelect } from "./components/bikes";
import { KitList } from "./components/kits";
import { BatteryContainer } from "./components/batteries";
import { FilterContainer } from "./components/filters";
import { ChainContainer } from "./components/chains";
import { SprocketContainer } from "./components/sprockets";
import { PartBrands } from "./constants";
import { TransmissionContainer } from "./components/transmission";

interface IPartsProps {
    parts: number;
    language: string;
}

@observer
export class Parts extends React.Component<IPartsProps, {}> {

    private store: AppStore;

    constructor(props: IPartsProps) {
        super(props);
        this.store = new AppStore(this.props.parts, this.props.language);
    }

    public render() {
        if (this.validParts()) {
            return (
                <div className="App">
                    <BikeSelect store={this.store.bikeStore} />
                    {this.renderParts()}
                </div>
            );
        } else {
            return <div>Invalid part categories</div>;
        }
    }

    private validParts(): boolean {
        const supported =
            PartBrands.AFAM +
            PartBrands.DC +
            PartBrands.Threed +
            PartBrands.Nitro +
            PartBrands.Shido +
            PartBrands.Ison +
            PartBrands.MIW +
            PartBrands.Chains +
            PartBrands.FrontSprockets +
            PartBrands.RearSprockets +
            PartBrands.Transmission;

        // tslint:disable-next-line:no-bitwise
        return ((this.props.parts & supported) !== 0);
    }

    private renderParts() {
        if (this.store.partStore instanceof KitStore) {
            return (<KitList store={this.store.partStore} />);
        }
        else if (this.store.partStore instanceof BatteryStore) {
            return (<BatteryContainer store={this.store.partStore} />);
        }
        else if (this.store.partStore instanceof FilterStore) {
            return (<FilterContainer store={this.store.partStore} />);
        }
        else if (this.store.partStore instanceof ChainStore) {
            return (<ChainContainer store={this.store.partStore} />);
        }
        else if (this.store.partStore instanceof SprocketStore) {
            return (<SprocketContainer store={this.store.partStore} />);
        }
        else if (this.store.partStore instanceof TransmissionStore) {
            return (<TransmissionContainer store={this.store.partStore} />);
        }
        else {
            return null;
        }
    }

}
