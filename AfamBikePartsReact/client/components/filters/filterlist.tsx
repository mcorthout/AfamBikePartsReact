import * as React from "react";
import { observer } from "mobx-react";
import { FilterStore } from "../../stores";

interface IFilterListProps {
    store: FilterStore;
}

interface IFilterListState {
    collapsed: boolean;
}

/**
 * Container to display a list of batteries
 */
@observer
export class FilterList extends React.Component<IFilterListProps, IFilterListState> {
    constructor(props: IFilterListProps) {
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
        const filters = this.props.store.filters;

        if (filters) {
            theParts = filters.map((s, i) =>
                <tr key={i.toString()} >
                    <td data-label="Item" className="cell-center">{s.Part}</td>
                    <td data-label="EAN" className="cell-center">{s.EAN}</td>
                    <td data-label="Type" className="cell-center">{s.Type}</td>
                    <td data-label="Applications" className="cell-center">
                        <a href="#">
                            <img
                                src="https://afam.com/wp-content/themes/netAfam/afamparts/bike.png"
                                onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                    <td data-label="Image" className="cell-center">
                        <a className="image-popup-fit-width" href="#">
                            <img
                                src={s.Photo}
                                style={{ borderWidth: "0px", width: "4em" }}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowFilterImage(s, s.Photo); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                    <td data-label="Image" className="cell-center">
                        <a className="image-popup-fit-width" href="#">
                            <img
                                src={s.Drawing}
                                style={{ borderWidth: "0px", width: "4em" }}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowFilterDrawing(s, s.Drawing); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                </tr>,
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableFilters")}</h2>
                <table className="part-table">
                    <thead>
                        <tr>
                            <th className="cell-center">{translate.t("Item")}</th>
                            <th className="cell-center">{translate.t("EAN")}</th>
                            <th className="cell-center">{translate.t("Type")}</th>
                            <th className="cell-center">{translate.t("Applications")}</th>
                            <th className="cell-center">{translate.t("Image")}</th>
                            <th className="cell-center">{translate.t("Drawing")}</th>
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
        const filters = this.props.store.filters;

        if (filters) {
            theTables = filters.map((s, i) =>
                <table className="part-table collapsed" key={i.toString()}>
                    <tbody>
                        <tr>
                            <td className="firstcol">{translate.t("Item")}</td>
                            <td>{s.Part}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("EAN")}</td>
                            <td>{s.EAN}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Type")}</td>
                            <td data-label="Type" >{s.Type}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Applications")}</td>
                            <td className="cell-center">
                                <a href="#">
                                    <img
                                        src="https://afam.com/wp-content/themes/netAfam/afamparts/bike.png"
                                        onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                                    />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Image")}</td>
                            <td data-label="Image" className="cell-center">
                                <a className="image-popup-fit-width" href="#">
                                    <img
                                        src={s.Photo}
                                        style={{ borderWidth: "0px", width: "4em" }}
                                        onError={(e) => this.ImageError(e.currentTarget)}
                                        onClick={(e) => { this.props.store.ShowFilterImage(s, s.Photo); e.preventDefault(); }}
                                    />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Drawing")}</td>
                            <td data-label="Drawing" className="cell-center">
                                <a className="image-popup-fit-width" href="#">
                                    <img
                                        src={s.Drawing}
                                        style={{ borderWidth: "0px", width: "4em" }}
                                        onError={(e) => this.ImageError(e.currentTarget)}
                                        onClick={(e) => { this.props.store.ShowFilterDrawing(s, s.Drawing); e.preventDefault() }}
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
                <h2>{translate.t("ApplicableFilters")}</h2>
                {theTables}
            </div>
        );
    }
}