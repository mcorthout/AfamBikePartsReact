import * as React from "react";
import { observer } from "mobx-react";
import { ChainInfoModel } from "../../models";
import Polyglot = require("node-polyglot");

interface IChainInfoModalProps {
    polyglot: Polyglot;
    info: ChainInfoModel | undefined;
    show: boolean;
    onHide: () => void;
}

@observer export class ChainInfoModal extends React.Component<IChainInfoModalProps, {}> {
    public render() {
        if (this.props.show && this.props.info) {
            const info = this.props.info;
            const poly = this.props.polyglot;

            document.body.classList.add("modal-showing");

            return (

                <div className="modal_background">
                    <div className="modal_content">
                        <div className="modal_header" onClick={(e) => {
                            this.props.onHide();
                        }}>
                            <div className="modal_title">
                                {info.ChainName}
                            </div>
                            <button type="button"
                                className="close"
                                onClick={(e) => {
                                    this.props.onHide();
                                }}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal_body">
                            <div className="chain-info">
                                <div className="chain-info-left">
                                    <div id="chain-info-table">
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("ChainType")}:</div> <div className="chain-info-cell cell-right" id="chainInfoPitch">{info.Pitch}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("Description")}:</div> <div className="chain-info-cell cell-right" id="chainInfoDescription">{info.Description}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("OuterColor")}:</div> <div className="chain-info-cell cell-right" id="chainInfoOuterColor">{info.OuterColor}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("PitchMm")} (P):</div> <div className="chain-info-cell cell-right" id="chainInfoPitchMm">{info.PitchMm}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("PitchWidth")} (W):</div> <div className="chain-info-cell cell-right" id="chainInfoPitchWidth">{info.PitchWidth}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("BushType")}:</div> <div className="chain-info-cell cell-right" id="chainInfoBush">{info.Bush}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("PinType")}:</div> <div className="chain-info-cell cell-right" id="chainInfoPin">{info.Pin}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("RollerDiameter")} (R):</div> <div className="chain-info-cell cell-right" id="chainInfoRollerDiameter">{info.RollerDiameter}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("PinDiameter")} (D):</div> <div className="chain-info-cell cell-right" id="chainInfoPinDiameter">{info.PinDiameter}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("InternalPlateThickness")} (T):</div> <div className="chain-info-cell cell-right" id="chainInfoInternalPlateThickness">{info.InternalPlateThickness}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("ExternalPlateThickness")} (t):</div> <div className="chain-info-cell cell-right" id="chainInfoExternalPlateThickness">{info.ExternalPlateThickness}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("InternalPlateHeight")} (H):</div> <div className="chain-info-cell cell-right" id="chainInfoInternalPlateHeight">{info.InternalPlateHeight}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"> <div className="chain-info-cell-label cell-right">{poly.t("ExternalPlateHeight")} (h):</div> <div className="chain-info-cell cell-right" id="chainInfoExternalPlateHeight">{info.ExternalPlateHeight}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("L1")}:</div> <div className="chain-info-cell cell-right" id="chainInfoL1">{info.L1}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("L2")}:</div> <div className="chain-info-cell cell-right" id="chainInfoL2">{info.L2}</div> <div className="chain-info-cell-label">mm</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("TensileStrength")}:</div> <div className="chain-info-cell cell-right" id="chainInfoTensileStrength">{info.TensileStrength}</div> <div className="chain-info-cell-label">daN</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("Weight")}:</div> <div className="chain-info-cell cell-right" id="chainInfoWeight">{info.Weight}</div> <div className="chain-info-cell-label">{poly.t("KgPer100Links")}</div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("StandardClip")}:</div> <div className="chain-info-cell cell-right" id="chainInfoStandardClip">{info.StandardClip}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("StandardRivet")}:</div> <div className="chain-info-cell cell-right" id="chainInfoStandardRivet">{info.StandardRivet}</div> <div className="chain-info-cell-label"></div></div>
                                        <div className="chain-info-row"><div className="chain-info-cell-label cell-right">{poly.t("SealType")}:</div> <div className="chain-info-cell cell-right" id="chainInfoSealType">{info.SealType}</div> <div className="chain-info-cell-label"></div></div>
                                    </div>
                                </div>
                                <div className="chain-info-right">
                                    <div>
                                        <img src="https://afam.com/wordpress/wp-content/themes/netAfam/afamparts/chain_dim.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal_footer">
                            <button type="button"
                                className="close_button"
                                onClick={(e) => {
                                    this.props.onHide();
                                }}
                            >
                                {poly.t("Close")}
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}