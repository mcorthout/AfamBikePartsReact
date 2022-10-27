import * as React from "react";
import { observer } from "mobx-react";
import { SprocketStore } from "../../stores";

interface ISprocketListProps {
    store: SprocketStore;
}

interface ISprocketListState {
    collapsed: boolean;
}

/**
 * Container to display a list of sprockets
 */
@observer
export class SprocketList extends React.Component<ISprocketListProps, ISprocketListState> {
    constructor(props: ISprocketListProps) {
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
        const sprockets = this.props.store.sprockets;

        let title = translate.t("ApplicableSprockets");

        if (sprockets) {
            theParts = sprockets.map((s, i) => {
                let sprocketImage = s.Drawing;
                return (<tr key={i.toString()} >
                            <td data-label="Item" className="cell-center">{s.CatalogNumber}</td>
                            <td data-label="EAN" className="cell-center">{s.Ean}</td>
                            <td data-label="Pitch" className="cell-center">{s.Pitch}</td>   
                            <td data-label="Teeth" className="cell-center">{s.Teeth}</td>
                            <td data-label="Material" className="cell-center">{s.Material}</td> 
                            <td data-label="Description" className="cell-center">{s.Description}</td>
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
                                        src={sprocketImage}
                                        onError={(e) => this.ImageError(e.currentTarget)}
                                        onClick={(e) => { this.props.store.ShowSprocketImage(s, sprocketImage); e.preventDefault(); }}
                                    />
                                </a>
                            </td>
                        </tr>)
                }
            );

            if (this.props.store.isFront != undefined) {
                if (this.props.store.isFront) {
                    title = translate.t("ApplicableFrontSprockets");
                }
                else {
                    title = translate.t("ApplicableRearSprockets");
                }
            }                
        }

        return (
            <div>
                <h2>{title}</h2>
                <table className="part-table">
                    <thead>
                        <tr>
                            <th className="cell-center">{translate.t("Item")}</th>
                            <th className="cell-center">{translate.t("EAN")}</th>
                            <th className="cell-center">{translate.t("Pitch")}</th>
                            <th className="cell-center">{translate.t("Teeth")}</th>
                            <th className="cell-center">{translate.t("Material")}</th>
                            <th className="cell-center">{translate.t("Description")}</th>
                            <th className="cell-center">{translate.t("Applications")}</th>
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
        const sprockets = this.props.store.sprockets;

        let title = translate.t("ApplicableSprockets");

        if (sprockets) {
            theTables = sprockets.map((s, i) => {
                let sprocketImage = s.Drawing;
                return (
                    <table className="part-table collapsed" key={i.toString()}>
                        <tbody>
                            <tr>
                                <td className="firstcol">{translate.t("Item")}</td>
                                <td>{s.CatalogNumber}</td>
                            </tr>
                            <tr>
                                <td className="firstcol">{translate.t("EAN")}</td>
                                <td>{s.Ean}</td>
                            </tr>
                            <tr>
                                <td className="firstcol">{translate.t("Pitch")}</td>
                                <td>{s.Pitch}</td>
                            </tr>
                            <tr>
                                <td className="firstcol">{translate.t("Teeth")}</td>
                                <td>{s.Teeth}</td>
                            </tr>
                            <tr>
                                <td className="firstcol">{translate.t("Material")}</td>
                                <td>{s.Material}</td>
                            </tr>
                            <tr>
                                <td className="firstcol">{translate.t("Description")}</td>
                                <td>{s.Description}</td>
                            </tr>                           
                            <tr>
                                <td className="firstcol">{translate.t("Applications")}</td>
                                <td data-label="Applications" className="cell-center">
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
                                            src={sprocketImage}
                                            onError={(e) => this.ImageError(e.currentTarget)}
                                            onClick={(e) => { this.props.store.ShowSprocketImage(s, sprocketImage); e.preventDefault(); }}
                                        />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>)
            }
            );

            if (this.props.store.isFront != undefined) {
                if (this.props.store.isFront) {
                    title = translate.t("ApplicableFrontSprockets");
                }
                else {
                    title = translate.t("ApplicableRearSprockets");
                }
            }     
        }

        return (
            <div>
                <h2>{title}</h2>
                {theTables}
            </div>
        );
    }
}