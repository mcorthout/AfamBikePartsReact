import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { KitModel, SprocketModel } from "../../models";

interface ISprocketProps {
    kit: KitModel;
    store: KitStore;
    side: string;
}

interface ISprocketState {
    thumbnailVisible: boolean;
}

/**
 * A component displaying a sprocket that is part of a kit
 * It allows the user to select the number of teeth
 */
@observer
export class Sprocket extends React.Component<ISprocketProps, ISprocketState> {

    constructor(props: ISprocketProps) {
        super(props);

        this.state = {
            thumbnailVisible: true,
        };
    }

    public render() {
        let sprockets = null;
        let selectedSprocket = null;
        const poly = this.props.store.appStore.polyglot;

        if (this.props.side === "front") {
            sprockets = this.props.kit.FrontSprockets;
            selectedSprocket = this.props.kit.CurrentState.SelectedFrontSprocket;
        } else {
            sprockets = this.props.kit.RearSprockets;
            selectedSprocket = this.props.kit.CurrentState.SelectedRearSprocket;
        }

        const sprocketOptions = sprockets.map((s) =>
            <option
                key={s.PartId}
                value={s.SprocketName}>{s.Teeth}
            </option>);

        const imageURL = "https://service.afam.com/webshop/images/sprockets/3d/vignettes/" + selectedSprocket.SprocketName + ".jpg";

        return (
            <div className="kitpart-component-cell">
                <div className="kitpart-block">
                    <div className="kitpart-inline">
                        <span className="kitpart-component-cell-label kitpart-inline">{poly.t("Teeth")}:</span>
                        <select className="kitpart-component-cell-value kitpart-inline"
                            value={selectedSprocket.SprocketName}
                            onChange={this.handleChange}>{sprocketOptions}
                        </select>
                    </div>
                    <div>
                        <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Part")}:</div>
                        <div className="kitpart-partname kitpart-component-cell-value kitpart-inline">{selectedSprocket.SprocketName}</div>
                    </div>
                    {this.thumbnail(selectedSprocket, imageURL)}
                </div>
            </div>
        );
    }

    private ImageError(item: HTMLImageElement) {
        this.setState({
            thumbnailVisible: false,
        });
    }

    private thumbnail(sprocket: SprocketModel, imageURL: string) {
        if (this.state.thumbnailVisible) {
            return (
                <div className="kitpart-thumbnail kitpart-block">
                    <a href="#">
                        <img
                            src={imageURL}
                            className="sprocket-thumbnail"
                            onError={(e) => this.ImageError(e.currentTarget)}
                            onClick={(e) => { this.props.store.ShowSprocketImage(sprocket, imageURL); e.preventDefault(); }}
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
     * Inform the parent component that the user selected a different number of teeth (i.e. a different sprocket)
     */
    private handleChange = (event: React.FormEvent<HTMLSelectElement>): void => {
        this.setState({
            thumbnailVisible: true,
        });
        const currentSprocketName = event.currentTarget.value;
        const sprockets = (this.props.side === "front") ? this.props.kit.FrontSprockets : this.props.kit.RearSprockets;
        const selectedSprocket = sprockets.find((s: SprocketModel) => s.SprocketName === currentSprocketName) || sprockets[0];
        this.props.store.handleSprocketChange(this.props.kit, this.props.side, selectedSprocket);
    }
}
