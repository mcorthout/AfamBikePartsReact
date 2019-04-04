import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { ChainModel, KitModel } from "../../models";

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

        const poly = this.props.store.polyglot;

        const selectedChain = this.props.kit.CurrentState.SelectedChain;
        const chains = this.props.kit.CurrentState.CurrentChains;
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

        const imageURL = "https://service.afam.com/webshop/images/chains/" + selectedChain.ChainBaseName + ".jpg";

        return (
            <div className="kitpart-component-cell">
                <div className="kitpart-block">
                    <div className="kitpart-block">
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Type")}:</div>
                            {chainTypeSelect}
                            {chainTypeSingle}
                        </div>
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Color")}:</div>
                            {chainColorSelect}
                            {chainColorSingle}
                        </div>
                        <div className="kitpart-inline-block">
                            <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Length")}:</div>
                            <div className="kitpart-component-cell-value kitpart-inline">{selectedChain.Length}</div>
                        </div>
                    </div>
                    <div className="kitpart-block">
                        <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Part")}:</div>
                        <div className="kitpart-component-cell-value kitpart-partname kitpart-inline">{selectedChain.FullName}</div>
                        <a href="#" onClick={(e) => { this.props.store.ShowChainInfo(selectedChain); e.preventDefault(); }}>&#9432;</a>
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

    private thumbnail(chain: ChainModel, imageURL: string) {
        if (this.state.thumbnailVisible) {
            return (
                <div className="kitpart-thumbnail kitpart-block">
                    <a href="#">
                        <img
                            src={imageURL}
                            className="chain-thumbnail"
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
    private getTypes(chains: ChainModel[]): string[] {

        const types: string[] = [];

        for (const chain of chains) {
            if (!types.find((p) => p === chain.ChainType)) {
                if (chain.ChainType !== "") {
                    types.push(chain.ChainType);
                }
            }
        }

        return types;
    }

    /**
     * Extract the possible chain colors for a specific type of chain
     * @param {string} atype - The type to filter on
     */
    private getColors(chains: ChainModel[], atype: string): string[] {

        const colors: string[] = [];

        for (const chain of chains) {
            if (chain.ChainType === atype) {
                if (!colors.find((p) => p === chain.ChainColor)) {
                    if (chain.ChainColor !== "") {
                        colors.push(chain.ChainColor);
                    }
                }
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

        let newChain: ChainModel | undefined;

        /* Try to find a chain with the selected type and the color that is part of the props (i.e. the default color) */
        const typecolorchains: ChainModel[] = [];

        for (const chain of chains) {
            // If the chain has the required type and color
            if (chain.ChainType === selectedType && chain.ChainColor === selectedColor) {
                // And it is not yet present in the output array
                if (!typecolorchains.find((p) => (p.ChainType === selectedType && p.ChainColor === selectedColor))) {
                    // Then add it to the output array
                    typecolorchains.push(chain);
                }
            }
        }

        if (typecolorchains.length > 0) {
            newChain = typecolorchains[0];
        }

        /* If no chain could be found, select the first chain of the selected type */
        if (!newChain) {
            const typechains: ChainModel[] = [];

            for (const chain of chains) {
                if (chain.ChainType === selectedType) {
                    if (!typechains.find((p) => p.ChainType === selectedType)) {
                        typechains.push(chain);
                    }
                }
            }

            if (typechains.length > 0) {
                newChain = typechains[0];
            }
        }

        /* If still no chain could be found, pick the first one */
        if (!newChain) {
            newChain = chains[0];
        }

        /* Set thumbnail back to visible */
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

        let newChain: ChainModel | undefined;

        /* Try to find a chain with the selected type and the color that is part of the props (i.e. the default color) */
        const typecolorchains: ChainModel[] = [];

        for (const chain of chains) {
            if (chain.ChainType === selectedType && chain.ChainColor === selectedColor) {
                if (!typecolorchains.find((p) => p.ChainType === selectedType && p.ChainColor === selectedColor)) {
                    typecolorchains.push(chain);
                }
            }
        }

        if (typecolorchains.length > 0) {
            newChain = typecolorchains[0];
        }

        /* If no chain could be found, pick the first one */
        if (!newChain) {
            newChain = chains[0];
        }

        /* Set thumbnail back to visible */
        this.setState({
            thumbnailVisible: true,
        });

        /* Signal the parent component that the chain was changed */
        this.props.store.handleChainChange(this.props.kit, newChain);
    }

}
