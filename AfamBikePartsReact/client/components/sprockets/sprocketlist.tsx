import * as React from "react";
import { observer } from "mobx-react";
import { SprocketStore } from "../../stores";
import { CommonImageBase } from "../../constants";

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
                    <td data-label="Item">{s.CatalogNumber}</td>
                    <td data-label="EAN">{s.Ean}</td>
                    <td data-label="Pitch">{s.Pitch}</td>
                    <td data-label="Teeth">{s.Teeth}</td>
                    <td data-label="Material">{s.Material}</td>
                    <td data-label="Description">{s.Description}</td>
                    <td data-label="Applications" className="centered">
                        <a href="#">
                            <img
                                src={CommonImageBase + "bike.png"}
                                onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                    <td data-label="Image" className="centered">
                        <a href="#">
                            <img
                                className="part-image"
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
                <table className="part-table sprocket-table">
                    <thead>
                        <tr>
                            <th>{translate.t("Item")}</th>
                            <th>{translate.t("EAN")}</th>
                            <th>{translate.t("Pitch")}</th>
                            <th>{translate.t("Teeth")}</th>
                            <th>{translate.t("Material")}</th>
                            <th>{translate.t("Description")}</th>
                            <th>{translate.t("Applications")}</th>
                            <th>{translate.t("Image")}</th>
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
                    <table className="part-table sprocket-table collapsed" key={i.toString()}>
                        <tbody>
                            <tr>
                                <td>{translate.t("Item")}</td>
                                <td>{s.CatalogNumber}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("EAN")}</td>
                                <td>{s.Ean}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Pitch")}</td>
                                <td>{s.Pitch}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Teeth")}</td>
                                <td>{s.Teeth}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Material")}</td>
                                <td>{s.Material}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Description")}</td>
                                <td>{s.Description}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Applications")}</td>
                                <td data-label="Applications" className="centered">
                                    <a href="#">
                                        <img
                                            src={CommonImageBase + "bike.png"}
                                            onClick={(e) => { this.props.store.ShowReversedBikes(s); e.preventDefault(); }}
                                        />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>{translate.t("Image")}</td>
                                <td data-label="Image" className="centered">
                                    <a href="#">
                                        <img
                                            className="part-image"
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