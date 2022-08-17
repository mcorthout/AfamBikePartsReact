import * as React from "react";
import { observer } from "mobx-react";
import { ChainList } from "./chainlist";
import { ChainStore } from "../../stores";
import { ImageModal } from "../common";
import { ChainInfoModal } from "../kits/chaininfomodal";

interface IChainContainerProps {
    store: ChainStore;
}

/**
 * A container managing the state of a list of chains
 */
@observer
export class ChainContainer extends React.Component<IChainContainerProps, {}> {
    constructor(props: IChainContainerProps) {
        super(props);
    }

    public render() {
        if (this.props.store.chains.length !== 0) {
            return (
                <div>
                    <ChainList
                        store={this.props.store}
                    />
                    <ImageModal
                        imageUrl={this.props.store.ChainImageUrl}
                        show={this.props.store.ChainImageModalVisible}
                        onHide={() => { this.props.store.HideChainImage(); }}
                        modalId="ChainImageModal"
                        imageId="ChainImageModalImage"
                        title={this.props.store.ChainImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <ChainInfoModal
                        polyglot={this.props.store.polyglot}
                        info={this.props.store.ChainInfo}
                        show={this.props.store.ChainInfoModalVisible}
                        onHide={this.props.store.HideChainInfo}
                    >
                    </ChainInfoModal>
                </div>
            );
        } else {
            return null;
        }
    }
}