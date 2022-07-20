import * as React from "react";
import { observer } from "mobx-react";
import { ChainStore } from "../../stores";

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

    private renderDefault() {
        let theParts = null;

        const translate = this.props.store.polyglot;
        const chains = this.props.store.chains;

        if (chains) {
            theParts = chains.map((s, i) =>
                <tr key={i.toString()} >
                    <td data-label="Item" className="cell-center">{s.ChainName}</td>
                    <td data-label="Pitch" className="cell-center">{s.Pitch}</td>
                    <td data-label="Length" className="cell-center">{s.Length}</td>
                    <td data-label="Description" className="cell-center">{s.Description}</td>
                    <td data-label="OuterColor" className="cell-center">{s.OuterColor}</td>                    
                </tr>,
            );
        }

        return (
            <div>
                <h2>{translate.t("ApplicableChains")}</h2>
                <table className="part-table">
                    <thead>
                        <tr>
                            <th className="cell-center">{translate.t("Item")}</th>
                            <th className="cell-center">{translate.t("Pitch")}</th>
                            <th className="cell-center">{translate.t("Length")}</th>
                            <th className="cell-center">{translate.t("Description")}</th>
                            <th className="cell-center">{translate.t("OuterColor")}</th>
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
            theTables = chains.map((s, i) =>
                <table className="part-table collapsed" key={i.toString()}>
                    <tbody>
                        <tr>
                            <td className="firstcol">{translate.t("Item")}</td>
                            <td>{s.ChainName}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Pitch")}</td>
                            <td>{s.Pitch}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Length")}</td>
                            <td>{s.Length}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("Description")}</td>
                            <td>{s.Description}</td>
                        </tr>
                        <tr>
                            <td className="firstcol">{translate.t("OuterColor")}</td>
                            <td>{s.OuterColor}</td>
                        </tr>                   
                    </tbody>
                </table>,
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