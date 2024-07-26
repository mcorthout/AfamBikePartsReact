import * as React from "react";
import { observer } from "mobx-react";
import { ChainStore } from "../../stores";
import { CommonImageBase, ProductImageBase } from "../../constants";

interface IChainListProps {
    store: ChainStore;
}

interface IChainListState {
}

/**
 * Container to display a list of chains
 */
@observer
export class ChainList extends React.Component<IChainListProps, IChainListState> {

    static readonly titles = [
        "Item",
        "Pitch",
        "Length",
        "Description",
        "OuterColor",
        "Applications",
        "Image",
        "Info",
    ];

    constructor(props: IChainListProps) {
        super(props);
    }

    private ImageError(item: HTMLImageElement) {
        item?.parentElement?.removeChild(item);
    }

    public render() {
        const translate = this.props.store.polyglot;
        const chains = this.props.store.chains;

        if (!chains) {
            return null;
        }

        // The (translated) headers for the chain attributes
        const translatedTitles = ChainList.titles.map((s) => translate.t(s));

        // Create divs that will form the column headers
        // These column headers will be visible when the data is displayed with each attribute in a column
        const columnHeaders = translatedTitles.map((s, i) => <div key={"colheader" + i.toString()} className="item-grid-col-header">{s}</div>);

        // Create divs with the actual chain data
        const parts = chains.map((s, i) => {
                let chainImage = ProductImageBase + "chains/" + s.ColorName + ".jpg";
                return [
                    <div key={"Item" + i.toString()} className="item-grid-data" data-label="Item">{s.ChainName}</div>,
                    <div key={"Pitch" + i.toString()} className="item-grid-data" data-label="Pitch">{s.Pitch}</div>,
                    <div key={"Length" + i.toString()} className="item-grid-data" data-label="Length">{s.Length}</div>,
                    <div key={"Description" + i.toString()} className="item-grid-data" data-label="Description">{s.Description}</div>,
                    <div key={"OuterColor" + i.toString()} className="item-grid-data" data-label="OuterColor">{s.OuterColor}</div>,
                    <div key={"Applications" + i.toString()} className="item-grid-data centered" data-label="Applications">
                        <a href="#">
                            <img
                                src={CommonImageBase + "bike.png"}
                                onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                            />
                        </a>
                    </div>,
                    <div key={"Image" + i.toString()} className="item-grid-data centered" data-label="Image">
                        <a href="#">
                            <img
                                className="part-image"
                                src={chainImage}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowChainImage(s, chainImage); e.preventDefault(); }}
                            />
                        </a>
                    </div>,
                    <div key={"Info" + i.toString()} className="item-grid-data centered item-grid-row-spacer" data-label="Info">
                        <a href="#">
                            <img
                                className="info-image"
                                src={CommonImageBase + "info.png"}
                                onClick={(e) => { this.props.store.ShowChainInfo(s); e.preventDefault(); }}
                            />
                        </a>
                    </div>,
                ];
            }
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
                <h2>{translate.t("ApplicableChains")}</h2>
                <div className="item-grid chain-grid">
                    {columnHeaders}
                    {partList}
                </div>
            </div>
        );
    }
}