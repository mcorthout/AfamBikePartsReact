import * as React from "react";
import { observer } from "mobx-react";
import { SprocketStore } from "../../stores";
import { CommonImageBase } from "../../constants";

interface ISprocketListProps {
    store: SprocketStore;
}

interface ISprocketListState {
}

@observer
export class SprocketList extends React.Component<ISprocketListProps, ISprocketListState> {

    static readonly titles = [
        "Item",
        "EAN",
        "Pitch",
        "Teeth",
        "Material",
        "Description",
        "Applications",
        "Image",
    ];

    constructor(props: ISprocketListProps) {
        super(props);
    }

    private ImageError(item: HTMLImageElement) {
        item?.parentElement?.removeChild(item);
    }

    public render() {
        const translate = this.props.store.polyglot;
        const sprockets = this.props.store.sprockets;

        if (!sprockets) {
            return null;
        }

        // The (translated) headers for the filter attributes
        const translatedTitles = SprocketList.titles.map((s) => translate.t(s));

        // Create divs that will form the column headers
        // These column headers will be visible when the data is displayed with each attribute in a column
        const columnHeaders = translatedTitles.map((s, i) => <div key={"colheader" + i.toString()} className="item-grid-col-header">{s}</div>);

        const parts = sprockets.map((s, i) => 
            [               
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Item">{s.CatalogNumber}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="EAN">{s.Ean}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Pitch">{s.Pitch}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Teeth">{s.Teeth}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Material">{s.Material}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Description">{s.Description}</div>,
                <div key={"Item" + i.toString()} className="item-grid-data centered" data-label="Applications">
                        <a href="#">
                            <img
                                src={CommonImageBase + "bike.png"}
                                onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                            />
                        </a>
                    </div>,
                <div key={"Item" + i.toString()} className="item-grid-data centered item-grid-row-spacer" data-label="Image">
                        <a href="#">
                            <img
                                className="part-image"
                                src={s.Drawing}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowSprocketImage(s, s.Drawing); e.preventDefault(); }}
                            />
                        </a>
                    </div>,
                ]
        );

        let title = translate.t("ApplicableSprockets");

        if (this.props.store.isFront != undefined) {
            if (this.props.store.isFront) {
                title = translate.t("ApplicableFrontSprockets");
            }
            else {
                title = translate.t("ApplicableRearSprockets");
            }
        }

        let partList = [];

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
                <h2>{title}</h2>
                <div className="item-grid sprocket-grid">
                    {columnHeaders}
                    {partList}
                </div>
            </div>
        );
    }
}