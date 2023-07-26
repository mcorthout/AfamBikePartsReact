import * as React from "react";
import { observer } from "mobx-react";
import { AppStore, KitStore } from "./stores";
import { BikeSelect } from "./components/bikes";
import { KitList } from "./components/kits";

interface IPartsProps {
    language: string;
}

@observer
export class Parts extends React.Component<IPartsProps, {}> {

    private store: AppStore;

    constructor(props: IPartsProps) {
        super(props);
        this.store = new AppStore(1, this.props.language);
    }

    public render() {
        return (
            <div className="App">
                <BikeSelect store={this.store.bikeStore} />
                <KitList store={this.store.kitStore as KitStore} />
            </div>
        );
    }

}
