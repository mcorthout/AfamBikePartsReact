import * as React from "react";
import { observer } from "mobx-react";
import { KitStore } from "../../stores";
import { KitModel, SprocketModel } from "../../models";
import { ProductImageBase } from "../../constants";

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
        const { kit, store, side } = this.props;
        const poly = store.appStore.polyglot;

        const sprockets = side === "front" ? kit.FrontSprockets : kit.RearSprockets;
        const selectedSprocket = side === "front" ? kit.CurrentState.SelectedFrontSprocket : kit.CurrentState.SelectedRearSprocket;

        const sprocketOptions = sprockets.map((s) => (
            <option key={s.PartId} value={s.SprocketName}>
                {s.Teeth}
            </option>
        ));

        const imageURL = ProductImageBase + "sprockets/3d/vignettes/" + selectedSprocket.SprocketName + ".jpg";

        return (
            <div className="kitpart-component-cell">
                <div className="kitpart-block">
                    <div className="kitpart-inline-block">
                        <span className="kitpart-component-cell-label kitpart-inline">{poly.t("Teeth")}:</span>
                        <select
                            className="kitpart-component-cell-value kitpart-inline"
                            name="sprocketSelector"
                            value={selectedSprocket.SprocketName}
                            onChange={this.handleChange}
                        >
                            {sprocketOptions}
                        </select>
                    </div>
                    <div>
                        <div className="kitpart-component-cell-label kitpart-inline">{poly.t("Part")}:</div>
                        <div className="kitpart-partname kitpart-component-cell-value kitpart-inline">
                            {selectedSprocket.SprocketName}
                        </div>
                    </div>
                    {this.thumbnail(selectedSprocket, imageURL)}
                </div>
            </div>
        );
    }

    private ImageError = () => {
        this.setState({
            thumbnailVisible: false,
        });
    };

    private thumbnail = (sprocket: SprocketModel, imageURL: string) => {
        if (this.state.thumbnailVisible) {
            return (
                <div className="kitpart-thumbnail kitpart-block">
                    <a href="#">
                        <img
                            src={imageURL}
                            onError={this.ImageError}
                            onClick={(e) => {
                                this.props.store.ShowSprocketImage(sprocket, imageURL);
                                e.preventDefault();
                            }}
                        />
                    </a>
                </div>
            );
        } else {
            return null;
        }
    };

    private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            thumbnailVisible: true,
        });
        const currentSprocketName = event.currentTarget.value;
        const sprockets = this.props.side === "front" ? this.props.kit.FrontSprockets : this.props.kit.RearSprockets;
        const selectedSprocket = sprockets.find((s) => s.SprocketName === currentSprocketName) || sprockets[0];
        this.props.store.handleSprocketChange(this.props.kit, this.props.side, selectedSprocket);
    };
}
