import * as React from "react";
import { observer } from "mobx-react";
import { BatteryStore } from "../../stores";
import { BatteryModel } from "../../models";

interface IBatteryInfoModalProps {
    store: BatteryStore;
    battery: BatteryModel;
    show: boolean;
    onHide: () => void;
}

@observer export class BatteryInfoModal extends React.Component<IBatteryInfoModalProps, {}> {
    public render() {
        if (this.props.show) {
            const battery = this.props.battery;
            const poly = this.props.store.polyglot;

            document.body.classList.add("modal-showing");

            return (

                <div className="modal_background">
                    <div className="modal_content">
                        <div className="modal_header" onClick={(e) => {
                            this.props.onHide();
                        }}>
                            <div className="modal_title">
                                {battery.Part}
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
                            <div className="battery-info">
                                <div className="battery-info-left">
                                    <div id="battery-info-table">
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Voltage")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoVolt">{battery.Volt}</div>
                                            <div className="battery-info-cell">V</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Capacity")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoCapacity">{battery.Capacity}</div>
                                            <div className="battery-info-cell">Ah</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("CCA")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoCCA">{battery.CCA}</div>
                                            <div className="battery-info-cell">A</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("AGM")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoAGM">{battery.AGM}</div>
                                            <div className="battery-info-cell"></div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Gel")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoGEL">{battery.Gel}</div>
                                            <div className="battery-info-cell"></div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Length")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoLength">{battery.Length}</div>
                                            <div className="battery-info-cell">mm</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Width")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoWidth">{battery.Width}</div>
                                            <div className="battery-info-cell">mm</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("Height")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoHeight">{battery.Height}</div>
                                            <div className="battery-info-cell">mm</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("DryWeight")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoDryWeight">{(battery.DryWeight === 0) ? "--" : battery.DryWeight}</div>
                                            <div className="battery-info-cell">kg</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("FilledWeight")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoFilledWeight">{(battery.FilledWeight === 0) ? "--" : battery.FilledWeight}</div>
                                            <div className="battery-info-cell">kg</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("AcidVolume")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoAcidVolume">{(battery.AcidVolume === 0) ? "--" : battery.AcidVolume}</div>
                                            <div className="battery-info-cell">{poly.t("Liter")}</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("ChargePreferred")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoChargePreferred">{battery.ChargePreferred}</div>
                                            <div className="battery-info-cell">A</div>
                                        </div>
                                        <div className="battery-info-row">
                                            <div className="battery-info-cell-label cell-right">{poly.t("ChargeMax")}:</div>
                                            <div className="battery-info-cell cell-right" id="batterInfoChargeMax">{battery.ChargeMax}</div>
                                            <div className="battery-info-cell">A</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="battery-info-right">
                                    <div className="battery-info-drawing-row">
                                        <div className="battery-info-cell-label cell-right">{poly.t("LayoutDrawing")}</div>
                                        <img src={battery.LayoutDrawing} className="battery-layout-image" />
                                    </div>
                                    <div className="battery-info-drawing-row">
                                        <div className="battery-info-cell-label cell-right">{poly.t("TerminalTop")}</div>
                                        <img src={battery.TerminalTop} className="battery-terminal-image" />
                                    </div>
                                    <div className="battery-info-drawing-row">
                                        <div className="battery-info-cell-label cell-right">{poly.t("TerminalFront")}</div>
                                        <img src={battery.TerminalFront} className="battery-terminal-image" />
                                    </div>
                                    <div className="battery-info-drawing-row">
                                        <div className="battery-info-cell-label cell-right">{poly.t("TerminalSide")}</div>
                                        <img src={battery.TerminalSide} className="battery-terminal-image" />
                                    </div>
                                    <div className="reverse-link">
                                        <button type="button" onClick={(e) => { this.props.store.ShowReversedBikes(battery); e.preventDefault(); }}>{poly.t("ApplicationList")}</button>
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