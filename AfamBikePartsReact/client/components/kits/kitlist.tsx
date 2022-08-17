import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { Kit } from "./kit";
import { ImageModal } from "../common";
import { ChainInfoModal } from "./chaininfomodal";

interface IKitListProps {
    store: KitStore;
}

/**
 * Container to display a list of kits
 */
@observer
export class KitList extends React.Component<IKitListProps, {}> {
    constructor(props: IKitListProps) {
        super(props);
    }

    public render() {
        if (this.props.store.hasKits) {
            let kitComponents = null;
            const kits = this.props.store.kits;

            if (kits) {
                kitComponents = kits.map((s, i) =>
                    <Kit
                        key={"kit_" + s.PartId}
                        kit={s}
                        store={this.props.store}
                    />,
                );
            }

            return (
                <div className="kit-table-container">
                    <h2>{this.props.store.polyglot.t("ApplicableKits")}</h2>
                    {kitComponents}
                    <ImageModal
                        imageUrl={this.props.store.SprocketImageUrl}
                        show={this.props.store.SprocketImageModalVisible}
                        onHide={() => { this.props.store.HideSprocketImage(); }}
                        modalId="SprocketImageModal"
                        imageId="SprocketModalImage"
                        title={this.props.store.SprocketImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <ImageModal
                        imageUrl={this.props.store.ChainImageUrl}
                        show={this.props.store.ChainImageModalVisible}
                        onHide={() => { this.props.store.HideChainImage(); }}
                        modalId="ChainImageModal"
                        imageId="ChainModalImage"
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
        }
        else {
            return null;
        }
    }
}