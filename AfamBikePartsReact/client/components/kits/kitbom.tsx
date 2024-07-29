import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { KitModel } from "../../models";
import { Chain } from "./chain";
import { Sprocket } from "./sprocket";

interface IKitBomProps {
    kit: KitModel;
    store: KitStore;
}

interface IKitBomListState {    
}

/**
 * A container for the parts that make up a kit: front sprocket, rear sprocket and chain
 */
@observer
export class KitBom extends React.Component<IKitBomProps, IKitBomListState> {
    constructor(props: IKitBomProps) {
        super(props);
    }

    public render() {
        const poly = this.props.store.polyglot;

        return (
            <div className="kit-parts">
                <div className="kitpart-table">
                    <div className="kitpart-component-header" >{poly.t("FrontSprocket")}</div>
                    <div className="kitpart-component-header" >{poly.t("Chains")}</div>
                    <div className="kitpart-component-header" >{poly.t("RearSprocket")}</div>
                    <Sprocket
                        kit={this.props.kit}
                        store={this.props.store}
                        side="front"
                    />
                    <Chain
                        kit={this.props.kit}
                        store={this.props.store}
                    />
                    <Sprocket
                        kit={this.props.kit}
                        store={this.props.store}
                        side="rear"
                    />
                </div>
            </div>
        );
    }
}