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

            let polarity = null;
            if (battery.PolarityLocation != "") {
                polarity =
                    <div>
                        <div>{poly.t("PolarityLocation")}</div>
                        <img src={battery.PolarityDrawing} />
                    </div>
            }

            let exhaust = null;
            if (battery.ExhaustPosition != "") {
                exhaust =
                    <div>
                        <div>{poly.t("ExhaustPosition")}</div>
                        <img src={battery.ExhaustDrawing} />
                    </div>
            }

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
                                <div className="battery-info-table">
                                    <div>
                                        <div>{poly.t("Voltage")}:</div>
                                        <div id="batterInfoVolt">{battery.Volt}</div>
                                        <div>V</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("Capacity")}:</div>
                                        <div id="batterInfoCapacity">{battery.Capacity}</div>
                                        <div>Ah</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("CCA")}:</div>
                                        <div id="batterInfoCCA">{battery.CCA}</div>
                                        <div>A</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("AGM")}:</div>
                                        <div id="batterInfoAGM">{battery.AGM}</div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <div>{poly.t("Gel")}:</div>
                                        <div id="batterInfoGEL">{battery.Gel}</div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <div>{poly.t("Length")}:</div>
                                        <div id="batterInfoLength">{battery.Length}</div>
                                        <div>mm</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("Width")}:</div>
                                        <div id="batterInfoWidth">{battery.Width}</div>
                                        <div>mm</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("Height")}:</div>
                                        <div id="batterInfoHeight">{battery.Height}</div>
                                        <div>mm</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("DryWeight")}:</div>
                                        <div id="batterInfoDryWeight">{(battery.DryWeight === 0) ? "--" : battery.DryWeight}</div>
                                        <div>kg</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("FilledWeight")}:</div>
                                        <div id="batterInfoFilledWeight">{(battery.FilledWeight === 0) ? "--" : battery.FilledWeight}</div>
                                        <div>kg</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("AcidVolume")}:</div>
                                        <div id="batterInfoAcidVolume">{(battery.AcidVolume === 0) ? "--" : battery.AcidVolume}</div>
                                        <div>{poly.t("Liter")}</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("ChargePreferred")}:</div>
                                        <div id="batterInfoChargePreferred">{battery.ChargePreferred}</div>
                                        <div>A</div>
                                    </div>
                                    <div>
                                        <div>{poly.t("ChargeMax")}:</div>
                                        <div id="batterInfoChargeMax">{battery.ChargeMax}</div>
                                        <div>A</div>
                                    </div>
                                </div>
                                <div className="battery-drawings">
                                    {polarity}
                                    {exhaust}
                                    <div>
                                        <div>{poly.t("TerminalTop")}</div>
                                        <img src={battery.TerminalTop} />
                                    </div>
                                    <div>
                                        <div>{poly.t("TerminalFront")}</div>
                                        <img src={battery.TerminalFront} />
                                    </div>
                                    <div>
                                        <div>{poly.t("TerminalSide")}</div>
                                        <img src={battery.TerminalSide} />
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