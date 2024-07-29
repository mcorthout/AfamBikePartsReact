import * as React from "react";
import { observer } from "mobx-react";
import { FilterStore } from "../../stores";
import { CommonImageBase } from "../../constants";

interface IFilterListProps {
    store: FilterStore;
}

interface IFilterListState {
}

@observer
export class FilterList extends React.Component<IFilterListProps, IFilterListState> {

    static readonly titles = [
        "Item",
        "EAN",
        "Type",
        "Applications",
        "Image",
        "Drawing",
    ];

    constructor(props: IFilterListProps) {
        super(props);
    }

    private ImageError(item: HTMLImageElement) {
        item?.parentElement?.removeChild(item);
    }

    public render() {
        const translate = this.props.store.polyglot;
        const filters = this.props.store.filters;

        if (!filters) {
            return null;
        }

        // The (translated) headers for the filter attributes
        const translatedTitles = FilterList.titles.map((s) => translate.t(s));

        // Create divs that will form the column headers
        // These column headers will be visible when the data is displayed with each attribute in a column
        const columnHeaders = translatedTitles.map((s, i) => <div key={"colheader" + i.toString()} className="item-grid-col-header">{s}</div>);

        // Create divs with the actual filter data
        const parts = filters.map((s, i) =>
            [
                <div key={"Item" + i.toString()} className="item-grid-data" data-label="Item">{s.Part}</div>,
                <div key={"EAN" + i.toString()} className="item-grid-data" data-label="EAN">{s.EAN}</div>,
                <div key={"Type" + i.toString()} className="item-grid-data" data-label="Type">{s.Type}</div>,
                <div key={"Applications" + i.toString()} className="item-grid-data centered" data-label="Applications">
                    <a href="#">
                        <img
                            src={CommonImageBase + "bike.png"}
                            onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                        />
                    </a>
                </div>,
                <div key={"Photo" + i.toString()} className="item-grid-data centered" data-label="Image">
                    <a href="#">
                        <img className="part-image"
                            src={s.Photo}
                            onError={(e) => this.ImageError(e.currentTarget)}
                            onClick={(e) => { this.props.store.ShowFilterImage(s, s.Photo); e.preventDefault(); }}
                        />
                    </a>
                </div>,
                <div key={"Drawing" + i.toString()} className="item-grid-data centered item-grid-row-spacer" data-label="Image">
                    <a href="#">
                        <img className="part-image"
                            src={s.Drawing}
                            onError={(e) => this.ImageError(e.currentTarget)}
                            onClick={(e) => { this.props.store.ShowFilterDrawing(s, s.Drawing); e.preventDefault(); }}
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
                <h2>{translate.t("ApplicableFilters")}</h2>
                <div className="item-grid filter-grid">
                    {columnHeaders}
                    {partList}
                </div>
            </div>
        );
    }
}