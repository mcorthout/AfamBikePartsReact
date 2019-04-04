import * as React from "react";
import { observer } from "mobx-react";
import { BatteryStore } from "../../stores";
import { BatteryList } from "./batterylist";
import { ImageModal, ReverseModal } from "../common";
import { BatteryInfoModal } from "./batteryinfomodal";

interface IBatteryContainerProps {
    store: BatteryStore;
}

/**
 * A container managing a list of batteries
 */
@observer
export class BatteryContainer extends React.Component<IBatteryContainerProps, {}> {
    constructor(props: IBatteryContainerProps) {
        super(props);       
    }   

    public render() {
        if (this.props.store.batteries.length !== 0) {
            return (
                <div>
                    <BatteryList store={this.props.store} />
                    <ImageModal
                        imageUrl={this.props.store.BatteryImageUrl}
                        show={this.props.store.BatteryImageModalVisible}
                        onHide={() => { this.props.store.HideBatteryImage(); }}
                        modalId="BatteryModal"
                        imageId="BatteryModalImage"
                        title={this.props.store.BatteryImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <BatteryInfoModal
                        store={this.props.store}
                        show={this.props.store.BatteryInfoModalVisible}
                        battery={this.props.store.BatteryInfo}
                        onHide={() => { this.props.store.HideBatteryInfo(); }}
                    >
                    </BatteryInfoModal>
                    <ReverseModal
                        store={this.props.store}
                        onHide={() => { this.props.store.HideReversedBikes(); }}
                        show={this.props.store.BatteryReverseModalVisible}
                        title={this.props.store.BatteryReverseTitle}
                    >
                    </ReverseModal>
                </div>
            );
        } else {
            return null;
        }
    }
}
