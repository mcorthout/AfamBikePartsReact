import * as React from "react";
import { observer } from "mobx-react";
import { BatteryStore } from "../../stores";

interface IBatteryListProps {
    store: BatteryStore;
}

interface IBatteryListState {
    collapsed: boolean;
}

/**
 * Container to display a list of batteries
 */
@observer
export class BatteryList extends React.Component<IBatteryListProps, IBatteryListState> {
    constructor(props: IBatteryListProps) {
        super(props);

        this.state = {
            collapsed: (window.innerWidth < 800),
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    public componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    public render() {
        if (this.state.collapsed) {
            return this.renderCollapsed();
        }
        else {
            return this.renderDefault();
        }
    }

    private updateWindowDimensions() {
        const isCollapsed = (window.innerWidth < 800);

        if (this.state.collapsed !== isCollapsed) {
            this.setState({
                collapsed: isCollapsed,
            });
        }
    }

    private ImageError(item: HTMLImageElement) {
        if (item) {
            const parent = item.parentElement;
            if (parent) {
                parent.removeChild(item);
            }
        }
    }

    private renderDefault() {
        let theParts = null;

        const translate = this.props.store.polyglot;
        const batteries = this.props.store.batteries;

        if (batteries) {
            theParts = batteries.map((s, i) =>
                <tr key={i.toString()} >
                    <td data-label="Item" className="cell-center">{s.Part}</td>
                    <td data-label="EAN" className="cell-center">{s.EAN}</td>
                    <td data-label="Type" className="cell-center">{s.BatteryType}</td>
                    <td data-label="Volt" className="cell-center">{s.Volt} V</td>
                    <td data-label="Capacity" className="cell-center">{s.Capacity} Ah</td>
                    <td data-label="CCA" className="cell-center">{s.CCA} A</td>
                    <td data-label="AGM" className="cell-center">{s.AGM}</td>
                    <td data-label="Gel" className="cell-center">{s.Gel}</td>
                    <td data-label="Acid" className="cell-center">{s.Acid}</td>
                    <td data-label="Info" className="cell-center">
                        <a href="#">
                            <img
                                className="info-image"
                                src="https://afam.com/wp-content/themes/netAfam/afamparts/info.png"
                                onClick={(e) => { this.props.store.ShowBatteryInfo(s); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                    <td data-label="Image" className="cell-center">
                        <a className="image-popup-fit-width" href="#">
                            <img
                                src={s.Photo}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowBatteryImage(s); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                </tr>,
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableBatteries")}</h2>
                <table className="part-table">
                    <thead>
                        <tr>
                            <th className="cell-center">{translate.t("Item")}</th>
                            <th className="cell-center">{translate.t("EAN")}</th>
                            <th className="cell-center">{translate.t("Technology")}</th>
                            <th className="cell-center">{translate.t("Voltage")}</th>
                            <th className="cell-center">{translate.t("Capacity")}</th>
                            <th className="cell-center">{translate.t("CCA")}</th>
                            <th className="cell-center">{translate.t("AGM")}</th>
                            <th className="cell-center">{translate.t("Gel")}</th>
                            <th className="cell-center">{translate.t("Acid")}</th>
                            <th className="cell-center">Info</th>
                            <th className="cell-center">{translate.t("Image")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theParts}
                    </tbody>
                </table>
            </div>
        );
    }

    private renderCollapsed() {
        let theTables = null;

        const translate = this.props.store.polyglot;
        const batteries = this.props.store.batteries;

        if (batteries) {
            theTables = batteries.map((s, i) =>
                <table className="part-table collapsed" key={i.toString()}>
                    <tbody>
                        <tr>
                            <td>{translate.t("Item")}</td>
                            <td>{s.Part}</td>
                        </tr>
                        <tr>
                            <td>{translate.t("EAN")}</td>
                            <td>{s.EAN}</td>
                        </tr>
                        <tr>
                            <td>{translate.t("Technology")}</td>
                            <td data-label="Type" >{s.BatteryType}</td>
                        </tr>
                        <tr>
                            <td>{translate.t("Voltage")}</td>
                            <td data-label="Volt">{s.Volt} V</td>
                        </tr>
                        <tr>
                            <td>{translate.t("Capacity")}</td>
                            <td data-label="Capacity">{s.Capacity} Ah</td>
                        </tr>
                        <tr>
                            <td>{translate.t("CCA")}</td>
                            <td data-label="CCA">{s.CCA} A</td>
                        </tr>
                        <tr>
                            <td>{translate.t("AGM")}</td>
                            <td data-label="AGM">{s.AGM}</td>
                        </tr>
                        <tr>
                            <td>{translate.t("Gel")}</td>
                            <td data-label="Gel">{s.Gel}</td>
                        </tr>
                        <tr>
                            <td>{translate.t("Acid")}</td>
                            <td data-label="Acid">{s.Acid}</td>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td data-label="Info" className="cell-center">
                                <a href="#">
                                    <img
                                        src="https://afam.com/wp-content/themes/netAfam/afamparts/info.png"
                                        onClick={(e) => { this.props.store.ShowBatteryInfo(s); e.preventDefault(); }}
                                    />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>{translate.t("Image")}</td>
                            <td data-label="Image" className="cell-center">
                                <a className="image-popup-fit-width" href="#">
                                    <img
                                        src={s.Photo}
                                        onError={(e) => this.ImageError(e.currentTarget)}
                                        onClick={(e) => { this.props.store.ShowBatteryImage(s); e.preventDefault(); }}
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>,
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableBatteries")}</h2>
                {theTables}
            </div>
        );
    }
}