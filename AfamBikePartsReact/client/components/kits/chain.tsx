import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { KitChainModel, KitModel } from "../../models";
import { ProductImageBase } from "../../constants";

interface IChainProps {
    kit: KitModel;
    store: KitStore;
}

interface IChainState {
    thumbnailVisible: boolean;
}

/**
 * A component displaying the chain that is part of a kit.
 * It allows the user to select a chain type and color where relevant
 */
@observer
export class Chain extends React.Component<IChainProps, IChainState> {
    constructor(props: IChainProps) {
        super(props);

        this.state = {
            thumbnailVisible: true,
        };
    }

    public render() {
        const { kit, store } = this.props;
        const poly = store.polyglot;

        const selectedChain = kit.CurrentState.SelectedChain;
        const chains = kit.CurrentState.CurrentChains;
        const chainTypes = this.getTypes(chains);
        const chainColors = this.getColors(chains, selectedChain.ChainType);

        let chainTypeOptions = null;
        let chainTypeSingle = null;
        let chainTypeSelect = null;

        let chainColorOptions = null;
        let chainColorSingle = null;
        let chainColorSelect = null;

        /*
           Build the select element to display the chain type
           Use a span instead of a select if there is only one item
        */
        if (chainTypes.length > 1) {
            chainTypeOptions = chainTypes.map((t) => <option key={t} value={t}>{t}</option>);
            chainTypeSelect =
                <select className="kitpart-component-cell-value kitpart-inline"
                    name="chainTypeSelector"
                    value={selectedChain.ChainType}
                    onChange={this.handleTypeChange}>
                    {chainTypeOptions}
                </select>;
        } else {
            const single = chainTypes[0];
            chainTypeSingle =
                <div className="kitpart-component-cell-value kitpart-inline">
                    {single}
                </div>;
        }

        /*
           Build the select element to display the chain color
           Use a span instead of a select if there is only one color
        */
        if (chainColors.length > 1) {
            chainColorOptions = chainColors.map((t) => <option key={t} value={t}>{t}</option>);
            chainColorSelect =
                <select className="kitpart-component-cell-value kitpart-inline"
                    name="chainColorSelector"
                    value={selectedChain.ChainColor}
                    onChange={this.handleColorChange}>
                    {chainColorOptions}
                </select>;
        } else {
            const single = chainColors[0];
            chainColorSingle =
                <div className="kitpart-component-cell-value kitpart-inline">
                    {single}
                </div>;
        }

        const imageURL = ProductImageBase + "chains/" + selectedChain.ChainBaseName + ".jpg";

        return (
            <div className="kitpart-component-cell">
                <div className="kitpart-block">
                    <div className="kitpart-block">
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline-block">{poly.t("Type")}:</div>
                            {chainTypeSelect}
                            {chainTypeSingle}
                        </div>
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline-block">{poly.t("Color")}:</div>
                            {chainColorSelect}
                            {chainColorSingle}
                        </div>
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline-block">{poly.t("Length")}:</div>
                            <div className="kitpart-component-cell-value kitpart-inline-block">{selectedChain.Length}</div>
                        </div>
                    </div>
                    <div className="kitpart-block">
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline-block">{poly.t("Part")}:</div>
                        </div>
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-value kitpart-partname kitpart-inline-block">{selectedChain.FullName}</div>
                        </div>
                        <div className="kitpart-inline-block">
                            <a className="kitpart-inline-block" href="#" onClick={(e) => { store.ShowChainInfo(selectedChain); e.preventDefault(); }}>&#9432;</a>
                        </div>
                    </div>
                    {this.thumbnail(selectedChain, imageURL)}
                </div>
            </div>
        );
    }

    private ImageError(item: HTMLImageElement) {
        this.setState({
            thumbnailVisible: false,
        });
    }

    private thumbnail(chain: KitChainModel, imageURL: string) {
        if (this.state.thumbnailVisible) {
            return (
                <div className="kitpart-thumbnail kitpart-block">
                    <a href="#">
                        <img
                            src={imageURL}
                            onError={(e) => this.ImageError(e.currentTarget)}
                            onClick={(e) => { this.props.store.ShowChainImage(chain, imageURL); e.preventDefault(); }}
                        />
                    </a>
                </div>
            );
        }
        else {
            return null;
        }
    }

    /**
     * Extract the possible chain types from the list of chains
     */
    private getTypes(chains: KitChainModel[]): string[] {
        const types: string[] = [];

        for (const chain of chains) {
            if (!types.includes(chain.ChainType) && chain.ChainType !== "") {
                types.push(chain.ChainType);
            }
        }

        return types;
    }

    /**
     * Extract the possible chain colors for a specific type of chain
     * @param {string} atype - The type to filter on
     */
    private getColors(chains: KitChainModel[], atype: string): string[] {
        const colors: string[] = [];

        for (const chain of chains) {
            if (chain.ChainType === atype && !colors.includes(chain.ChainColor) && chain.ChainColor !== "") {
                colors.push(chain.ChainColor);
            }
        }

        return colors;
    }

    /**
     * The user selected a new type of chain
     */
    private handleTypeChange = (event: React.FormEvent<HTMLSelectElement>): void => {
        const selectedColor = this.props.kit.CurrentState.SelectedChain.ChainColor;
        const selectedType = event.currentTarget.value;
        const chains = this.props.kit.CurrentState.CurrentChains;

        let newChain: KitChainModel | undefined;

        /* Try to find a chain with the selected type and the color that is part of the props (i.e. the default color) */
        const typecolorchains: KitChainModel[] = chains.filter((chain) =>
            chain.ChainType === selectedType && chain.ChainColor === selectedColor
        );

        if (typecolorchains.length > 0) {
            newChain = typecolorchains[0];
        }

        /* If no chain could be found, select the first chain of the selected type */
        if (!newChain) {
            const typechains: KitChainModel[] = chains.filter((chain) => chain.ChainType === selectedType);

            if (typechains.length > 0) {
                newChain = typechains[0];
            }
        }

        /* If still no chain could be found, pick the first one */
        if (!newChain) {
            newChain = chains[0];
        }

        /* Set thumbnail potentially back to visible */
        this.setState({
            thumbnailVisible: true,
        });

        /* Signal the parent component that the chain was changed */
        this.props.store.handleChainChange(this.props.kit, newChain);
    }

    /**
     * The user selected a new chain color
     */
    private handleColorChange = (event: React.FormEvent<HTMLSelectElement>): void => {
        const selectedColor = event.currentTarget.value;
        const selectedType = this.props.kit.CurrentState.SelectedChain.ChainType;
        const chains = this.props.kit.CurrentState.CurrentChains;

        let newChain: KitChainModel | undefined;

        /* Try to find a chain with the selected type and color that is part of the props (i.e. the default color) */
        const typecolorchains: KitChainModel[] = chains.filter((chain) =>
            chain.ChainType === selectedType && chain.ChainColor === selectedColor
        );

        if (typecolorchains.length > 0) {
            newChain = typecolorchains[0];
        }

        /* If no chain could be found, pick the first one */
        if (!newChain) {
            newChain = chains[0];
        }

        /* Set thumbnail potentially back to visible */
        this.setState({
            thumbnailVisible: true,
        });

        /* Signal the parent component that the chain was changed */
        this.props.store.handleChainChange(this.props.kit, newChain);
    }
}