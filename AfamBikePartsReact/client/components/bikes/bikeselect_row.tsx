import * as React from "react";
import { observer } from "mobx-react";

export interface IBikeSelectRowProperties {
    items: string[];
    label: string;
    selectedOption: string;
    signalOptionChange: (value: string) => void;
}

/**
 * Allow the user to select a specific motorbike
 */
@observer
export class BikeSelectRow extends React.Component<IBikeSelectRowProperties, {}> {

    constructor(props: IBikeSelectRowProperties) {
        super(props);
    }

    public render() {

        let select = null;
        let selectOptions = null;
        let span = null;

        if (this.props.items.length > 0) {
            selectOptions = this.props.items.map((b, i) => <option key={b+i} value={b}>{b}</option>);

            let selectClass = "";
            let spanClass = "";

            if (this.props.items.length === 1) {
                selectClass = "bike-select-cell-none";
                spanClass = "bike-select-cell";
            } else {
                selectClass = "bike-select-cell";
                spanClass = "bike-select-cell-none";
            }

            select =
                <select
                    name="bikeSelector"
                    className={selectClass}
                    value={this.props.selectedOption}
                    onChange={this.handleSelectChange}>
                    {selectOptions}
                </select>;

            span = <span className={spanClass}
                    >
                {this.props.items[0]}
            </span>;

            return (
                <div className="bike-select-row">
                    <div className="bike-select-cell">
                        <span>{this.props.label}</span>
                    </div>
                    <div className="bike-select-cell">
                        {select}
                        {span}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    private handleSelectChange = (event: React.FormEvent<HTMLSelectElement>): void => {
        this.props.signalOptionChange(event.currentTarget.value);
    }
}
