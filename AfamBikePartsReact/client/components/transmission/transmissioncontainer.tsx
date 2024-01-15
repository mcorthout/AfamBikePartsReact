import { observer } from "mobx-react";
import * as React from "react";
import { TransmissionStore } from "../../stores";
import { ChainContainer } from "../chains";
import { KitList } from "../kits";
import { SprocketContainer } from "../sprockets";

interface ITransmissionContainerProps {
    store: TransmissionStore;
}

/**
 * A container managing transmission components
 */
@observer
export class TransmissionContainer extends React.Component<ITransmissionContainerProps, {}> {
    constructor(props: ITransmissionContainerProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <KitList store={this.props.store.kitstore} />
                <ChainContainer store={this.props.store.chainstore} />
                <SprocketContainer store={this.props.store.frontsprocketstore} />
                <SprocketContainer store={this.props.store.rearsprocketstore} />
            </div>
        );
    }
}
