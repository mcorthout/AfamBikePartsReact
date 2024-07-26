import * as React from "react";
import { observer } from "mobx-react";
import { BatteryStore } from "../../stores";
import { CommonImageBase } from "../../constants";

interface IBatteryListProps {
    store: BatteryStore;
}

interface IBatteryListState {
}

/**
 * Container to display a list of batteries
 */
@observer
export class BatteryList extends React.Component<IBatteryListProps, IBatteryListState> {

    static readonly titles = [
        "Item",
        "EAN",
        "Technology",
        "Voltage",
        "Capacity",
        "CCA",
        "AGM",
        "Gel",
        "Acid",
        "Info",
        "Image",
    ];

    constructor(props: IBatteryListProps) {
        super(props);
    }

    private ImageError(item: HTMLImageElement) {
        item?.parentElement?.removeChild(item);
    }

    public render() {
        const translate = this.props.store.polyglot;
        const batteries = this.props.store.batteries;

        if (!batteries) {
            return null;
        }

        // The (translated) headers for the battery attributes
        const translatedTitles = BatteryList.titles.map((s) => translate.t(s));

        // Create divs that will form the column headers
        // These column headers will be visible when the data is displayed with each attribute in a column
        const columnHeaders = translatedTitles.map((s, i) => <div key={"colheader" + i.toString()} className="item-grid-col-header">{s}</div>);

        // Create divs with the actual battery data
        const parts = batteries.map((s, i) =>
            [
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Item">{s.Part}</div>,
                <div key={"EAN" + i.toString()} className="item-grid-data" data-label="EAN">{s.EAN}</div>,
                <div key={"Type" + i.toString()} className="item-grid-data" data-label="Type">{s.BatteryType}</div>,
                <div key={"Volt" + i.toString()} className="item-grid-data" data-label="Volt">{s.Volt} V</div>,
                <div key={"Capacity" + i.toString()} className="item-grid-data" data-label="Capacity">{s.Capacity} Ah</div>,
                <div key={"CCA" + i.toString()} className="item-grid-data" data-label="CCA">{s.CCA} A</div>,
                <div key={"AGM" + i.toString()} className="item-grid-data" data-label="AGM">{s.AGM}</div>,
                <div key={"Gel" + i.toString()} className="item-grid-data" data-label="Gel">{s.Gel}</div>,
                <div key={"Acid" + i.toString()} className="item-grid-data" data-label="Acid">{s.Acid}</div>,
                <div key={"Info" + i.toString()} className="item-grid-data centered" data-label="Info">
                    <a href="#">
                        <img
                            className="info-image"
                            src={CommonImageBase + "info.png"}
                            onClick={(e) => { this.props.store.ShowBatteryInfo(s); e.preventDefault(); }}
                        />
                    </a>
                </div>,
                <div key={"Image" + i.toString()} className="item-grid-data centered item-grid-row-spacer" data-label="Image">
                    <a href="#">
                        <img className="part-image"
                            src={s.Photo}
                            onError={(e) => this.ImageError(e.currentTarget)}
                            onClick={(e) => { this.props.store.ShowBatteryImage(s); e.preventDefault(); }}
                        />
                    </a>
                </div>,
            ]
        );

        let partList = [];

        // Prepend each data div with a "row header"
        // These row header divs will be visible when the data is displayed with each attribute in a row
        for (let i = 0; i < parts.length; i++) {
            for (let j = 0; j < parts[i].length; j++) {                
                const rowclass = "item-grid-row-header" + (j === translatedTitles.length - 1 ? " item-grid-row-spacer" : "");
                const rowkey = `rowheader_${j}_${i}`;
                const rowheader = <div key={rowkey} className={rowclass}>{translatedTitles[j]}</div>;
                partList.push(rowheader);
                partList.push(parts[i][j]);
            }
        }       

        return (
            <div>
                <h2>{translate.t("ApplicableBatteries")}</h2>
                <div className="item-grid battery-grid">
                    {columnHeaders}
                    {partList}
                </div>
            </div>
        );
    }
}