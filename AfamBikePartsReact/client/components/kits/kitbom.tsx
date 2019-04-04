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
    collapsed: boolean;
}

/**
 * A container for the parts that make up a kit: front sprocket, rear sprocket and chain
 */
@observer
export class KitBom extends React.Component<IKitBomProps, IKitBomListState> {

    constructor(props: IKitBomProps) {
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
        this.setState({
            collapsed: window.innerWidth < 800,
        });
    }

    private renderCollapsed() {
        const poly = this.props.store.polyglot;

        return (
            <div className="kit-parts">
                <div className="kitpart-table">
                    <div className="kitpart-body">
                        <div className="kitpart-row">
                            <div className="kitpart-component-header" >{poly.t("FrontSprocket")}</div>
                            <Sprocket
                                kit={this.props.kit}
                                store={this.props.store}
                                side="front"
                            />
                        </div>
                        <div className="kitpart-row">
                            <div className="kitpart-component-header" >{poly.t("Chains")}</div>
                            <Chain
                                kit={this.props.kit}
                                store={this.props.store}
                            />
                        </div>
                        <div className="kitpart-row">
                            <div className="kitpart-component-header" >{poly.t("RearSprocket")}</div>
                            <Sprocket
                                kit={this.props.kit}
                                store={this.props.store}
                                side="rear"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderDefault() {
        const poly = this.props.store.polyglot;

        return (
            <div className="kit-parts">
                <div className="kitpart-table">
                    <div className="kitpart-header">
                        <div className="kitpart-row">
                            <div className="kitpart-component-header" >{poly.t("FrontSprocket")}</div>
                            <div className="kitpart-component-header" >{poly.t("Chains")}</div>
                            <div className="kitpart-component-header" >{poly.t("RearSprocket")}</div>
                        </div>
                    </div>
                    <div className="kitpart-body">
                        <div className="kitpart-row">
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
                </div>
            </div>
        );
    }

}
