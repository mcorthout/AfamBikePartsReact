import * as React from "react";
import { observer } from "mobx-react";
import ReactPaginate from "react-paginate";
import { PartStore } from "../../stores";

interface IReverseModalProps {
    store: PartStore;
    show: boolean;
    onHide: () => void;
    title: string;
}

interface IReverseModalState {
    selectedPage: number;
}

@observer
export class ReverseModal extends React.Component<IReverseModalProps, IReverseModalState> {
    private readonly pageSize: number = 20;

    constructor(props: IReverseModalProps) {
        super(props);

        this.state = {
            selectedPage: 0,
        }

        this.updatePage = this.updatePage.bind(this);
    }

    private updatePage(data: any): void {
        this.setState({
            selectedPage: data.selected,
        });
    }

    public render() {
        if (this.props.show) {
            document.body.classList.add("modal-showing");

            let bikelist = null;

            const allBikes = this.props.store.ReversedBikes;
            const pageCount = Math.ceil(allBikes.length / this.pageSize);
            const bikesToDisplay = allBikes.slice(this.state.selectedPage * this.pageSize, (this.state.selectedPage + 1) * this.pageSize);

            if (bikesToDisplay) {
                bikelist = bikesToDisplay.map((b, i) =>
                   <div key={"reverse_" + i}>
                        <div className="cell-left">{b.Brand}</div>
                        <div className="cell-center">{b.Cc}</div>
                        <div className="cell-left">{b.Model}</div>
                        <div className="cell-center">{b.From}</div>
                        <div className="cell-center">{b.To}</div>
                   </div>,
                );
            }

            const poly = this.props.store.polyglot;

            return (
                <div className="modal_background" >
                    <div className="modal_content">
                        <div className="modal_header" onClick={(e) => {
                            this.props.onHide();
                        }} >
                            <div className="modal_title">
                                {this.props.title}
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
                            <div className="bike-reverse-body">
                                <div className="bike-reverse-table">
                                   <div>
                                        <div>{poly.t("Brand")}</div>
                                        <div>{poly.t("Cc")}</div>
                                        <div>{poly.t("Model")}</div>
                                        <div>{poly.t("From")}</div>
                                        <div>{poly.t("To")}</div>
                                   </div>
                                   {bikelist}                               
                                </div>
                                <div className="paginator">
                                    <ReactPaginate
                                        previousLabel={poly.t("Previous")}
                                        nextLabel={poly.t("Next")}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={this.updatePage}
                                        activeClassName={"active"}
                                        initialPage={0}
                                        hrefBuilder={() => { return "#"; }}
                                    />
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