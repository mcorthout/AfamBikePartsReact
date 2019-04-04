import * as React from "react";
import { observer } from "mobx-react";
import { BikeStore } from "../../stores";
import { BikeSelectRow } from "./bikeselect_row";

interface IBikeSelectProps {
    store: BikeStore;
}

/**
 * Allow the user to select a specific motorbike
 */
@observer
export class BikeSelect extends React.Component<IBikeSelectProps, {}> {

    constructor(props: IBikeSelectProps) {
        super(props);
    }

    public render() {
        const store = this.props.store;
        const bike = store.bike;
        const poly = this.props.store.appStore.polyglot;

        return (
            <div>
                <h2>{poly.t("BikeSelect")}</h2>
                <div className="bike-select-container">
                    <BikeSelectRow
                        items={bike.brands}
                        label={poly.t("Brand")}
                        selectedOption={bike.selectedBrand}
                        signalOptionChange={store.selectBrand}
                    />
                    <BikeSelectRow
                        items={bike.ccs}
                        label={poly.t("Cc")}
                        selectedOption={bike.selectedCc}
                        signalOptionChange={store.selectCc}
                    />
                    <BikeSelectRow
                        items={bike.models}
                        label={poly.t("Model")}
                        selectedOption={bike.selectedModel}
                        signalOptionChange={store.selectModel}
                    />
                    <BikeSelectRow
                        items={bike.years}
                        label={poly.t("Year")}
                        selectedOption={bike.selectedYear}
                        signalOptionChange={store.selectYear}
                    />
                </div>
            </div>
        );
    }

}
