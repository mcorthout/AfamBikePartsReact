import * as React from "react";
import { observer } from "mobx-react";
import { ChainInfoModel } from "../../models";
import Polyglot = require("node-polyglot");
import { CommonImageBase } from "../../constants";

interface IChainInfoModalProps {
    polyglot: Polyglot;
    info: ChainInfoModel | undefined;
    show: boolean;
    onHide: () => void;
}

@observer export class ChainInfoModal extends React.Component<IChainInfoModalProps, {}> {

    private handleClose = () => {
        this.props.onHide();
    };

    public render() {
        const { polyglot, info, show } = this.props;

        if (!show) {
            return null;
        }

        document.body.classList.add("modal-showing");

        const chainInfo = (info) ?
            <div className="chain-info">
                <div className="chain-info-table">
                    <div><div>{polyglot.t("ChainType")}:</div> <div id="chainInfoPitch">{info.Pitch}</div> <div></div></div>
                    <div><div>{polyglot.t("Description")}:</div> <div id="chainInfoDescription">{info.Description}</div> <div></div></div>
                    <div><div>{polyglot.t("OuterColor")}:</div> <div id="chainInfoOuterColor">{info.OuterColor}</div> <div></div></div>
                    <div><div>{polyglot.t("PitchMm")} (P):</div> <div id="chainInfoPitchMm">{info.PitchMm}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("PitchWidth")} (W):</div> <div id="chainInfoPitchWidth">{info.PitchWidth}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("BushType")}:</div> <div id="chainInfoBush">{info.Bush}</div> <div></div></div>
                    <div><div>{polyglot.t("PinType")}:</div> <div id="chainInfoPin">{info.Pin}</div> <div></div></div>
                    <div><div>{polyglot.t("RollerDiameter")} (R):</div> <div id="chainInfoRollerDiameter">{info.RollerDiameter}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("PinDiameter")} (D):</div> <div id="chainInfoPinDiameter">{info.PinDiameter}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("InternalPlateThickness")} (T):</div> <div id="chainInfoInternalPlateThickness">{info.InternalPlateThickness}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("ExternalPlateThickness")} (t):</div> <div id="chainInfoExternalPlateThickness">{info.ExternalPlateThickness}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("InternalPlateHeight")} (H):</div> <div id="chainInfoInternalPlateHeight">{info.InternalPlateHeight}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("ExternalPlateHeight")} (h):</div> <div id="chainInfoExternalPlateHeight">{info.ExternalPlateHeight}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("L1")}:</div> <div id="chainInfoL1">{info.L1}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("L2")}:</div> <div id="chainInfoL2">{info.L2}</div> <div>mm</div></div>
                    <div><div>{polyglot.t("TensileStrength")}:</div> <div id="chainInfoTensileStrength">{info.TensileStrength}</div> <div>daN</div></div>
                    <div><div>{polyglot.t("Weight")}:</div> <div id="chainInfoWeight">{info.Weight}</div> <div>{polyglot.t("KgPer100Links")}</div></div>
                    <div><div>{polyglot.t("StandardClip")}:</div> <div id="chainInfoStandardClip">{info.StandardClip}</div> <div></div></div>
                    <div><div>{polyglot.t("StandardRivet")}:</div> <div id="chainInfoStandardRivet">{info.StandardRivet}</div> <div></div></div>
                    <div><div>{polyglot.t("SealType")}:</div> <div id="chainInfoSealType">{info.SealType}</div> <div></div></div>
                </div>
                <div>
                    <img src={CommonImageBase + "chain_dim.png"} />
                </div>
            </div>
            :
            <div className="chain-info-missing">{polyglot.t("NoChainInfo")}</div>;

        return (
            <div className="modal_background">
                <div className="modal_content">
                    <div className="modal_header" onClick={this.handleClose} >
                        <div className="modal_title">
                            {info ? info.ChainName : ""}
                        </div>
                        <button type="button" className="close" onClick={this.handleClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal_body">
                        {chainInfo}
                    </div>
                    <div className="modal_footer">
                        <button type="button" className="close_button" onClick={this.handleClose}>
                            {polyglot.t("Close")}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}