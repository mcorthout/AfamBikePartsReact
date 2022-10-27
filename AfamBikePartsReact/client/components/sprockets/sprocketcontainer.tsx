import * as React from "react";
import { observer } from "mobx-react";
import { SprocketStore } from "../../stores";
import { SprocketList } from "./sprocketlist";
import { ImageModal, ReverseModal } from "../common";

interface ISprocketContainerProps {
    store: SprocketStore;
}

/**
 * A container managing the state of a list of chains
 */
@observer
export class SprocketContainer extends React.Component<ISprocketContainerProps, {}> {
    constructor(props: ISprocketContainerProps) {
        super(props);
    }

    public render() {
        if (this.props.store.sprockets.length !== 0) {
            return (
                <div>
                    <SprocketList
                        store={this.props.store}
                    />
                    <ImageModal
                        imageUrl={this.props.store.SprocketImageUrl}
                        show={this.props.store.SprocketImageModalVisible}
                        onHide={() => { this.props.store.HideSprocketImage(); }}
                        modalId="SprocketModal"
                        imageId="SprocketModalImage"
                        title={this.props.store.SprocketImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <ReverseModal
                        store={this.props.store}
                        onHide={() => { this.props.store.HideReversedBikes(); }}
                        show={this.props.store.SprocketReverseModalVisible}
                        title={this.props.store.SprocketReverseTitle}
                    >
                    </ReverseModal>
               </div>
            );
        } else {
            return null;
       }
    }
}
