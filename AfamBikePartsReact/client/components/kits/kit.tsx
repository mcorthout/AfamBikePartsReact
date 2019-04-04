import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { KitModel } from "../../models";
import { KitBom } from "./kitbom";

interface IKitProps {
    kit: KitModel;
    store: KitStore;
}

/**
 * This component renders a single kit
 * It displays the kit type, kit name and kit components (through a KitBom child component)
 */
@observer
export class Kit extends React.Component<IKitProps, {}> {

    constructor(props: IKitProps, {}) {
        super(props);
    }

    public render() {

        const kit = this.props.kit;

        return (
            <div className="kit-table-row">
                <div className="kit-table-cell">
                    <div className="kit-title">{kit.KitType}</div>
                </div>
                <div className="kit-table-cell">
                    <div className="kit-table-kitpart">{this.props.store.polyglot.t("PartNumber")}: <span className="kit-table-kitname">{kit.KitName}</span></div>
                    <div className="kit-table-description">{kit.Description}</div>
                    <KitBom
                        key={"kitbom_" + kit.PartId}
                        kit={kit}
                        store={this.props.store}
                    />
                </div>
            </div>
        );
    }

}
