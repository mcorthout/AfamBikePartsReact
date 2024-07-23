import * as React from "react";
import { observer } from "mobx-react";
import { ChainStore } from "../../stores";
import { CommonImageBase, ProductImageBase } from "../../constants";

interface IChainListProps {
    store: ChainStore;
}

interface IChainListState {
    collapsed: boolean;
}

/**
 * Container to display a list of chains
 */
@observer
export class ChainList extends React.Component<IChainListProps, IChainListState> {
    constructor(props: IChainListProps) {
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
        const chains = this.props.store.chains;

        if (chains) {
            theParts = chains.map((s, i) => {
                let chainImage = ProductImageBase + "chains/" + s.ColorName + ".jpg";
                return (<tr key={i.toString()} >
                    <td data-label="Item">{s.ChainName}</td>
                    <td data-label="Pitch">{s.Pitch}</td>
                    <td data-label="Length">{s.Length}</td>
                    <td data-label="Description">{s.Description}</td>
                    <td data-label="OuterColor">{s.OuterColor}</td>
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
                                src={chainImage}
                                onError={(e) => this.ImageError(e.currentTarget)}
                                onClick={(e) => { this.props.store.ShowChainImage(s, chainImage); e.preventDefault(); }}
                            />
                        </a>
                    </td>
                    <td data-label="Info" className="centered">
                        <a href="#">
                            <img
                                className="info-image"
                                src={CommonImageBase + "info.png"}
                                onClick={(e) => { this.props.store.ShowChainInfo(s); e.preventDefault(); }}
                            />
                        </a>
                    </td>                    
                </tr>)
            }
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableChains")}</h2>
                <table className="part-table chain-table">
                    <thead>
                        <tr>
                            <th>{translate.t("Item")}</th>
                            <th>{translate.t("Pitch")}</th>
                            <th>{translate.t("Length")}</th>
                            <th>{translate.t("Description")}</th>
                            <th>{translate.t("OuterColor")}</th>
                            <th>{translate.t("Applications")}</th>
                            <th>{translate.t("Image")}</th>
                            <th>Info</th>
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
        const chains = this.props.store.chains;

        if (chains) {
            theTables = chains.map((s, i) => {
                let chainImage = ProductImageBase + "chains/" + s.ColorName + ".jpg";
                return (
                    <table className="part-table chain-table collapsed" key={i.toString()}>
                        <tbody>
                            <tr>
                                <td>{translate.t("Item")}</td>
                                <td>{s.ChainName}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Pitch")}</td>
                                <td>{s.Pitch}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Length")}</td>
                                <td>{s.Length}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("Description")}</td>
                                <td>{s.Description}</td>
                            </tr>
                            <tr>
                                <td>{translate.t("OuterColor")}</td>
                                <td>{s.OuterColor}</td>
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
                                            src={chainImage}
                                            onError={(e) => this.ImageError(e.currentTarget)}
                                            onClick={(e) => { this.props.store.ShowChainImage(s, chainImage); e.preventDefault(); }}
                                        />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>)
            }
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableChains")}</h2>
                {theTables}
            </div>
        );
    }
}