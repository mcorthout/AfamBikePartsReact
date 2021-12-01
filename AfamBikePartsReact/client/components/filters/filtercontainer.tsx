import * as React from "react";
import { observer } from "mobx-react";
import { FilterList } from "./filterlist";
import { FilterStore } from "../../stores";
import { ImageModal, ReverseModal } from "../common";

interface IFilterContainerProps {
    store: FilterStore;
}

/**
 * A container managing the state of a list of filters
 */
@observer
export class FilterContainer extends React.Component<IFilterContainerProps, {}> {
    constructor(props: IFilterContainerProps) {
        super(props);
    }

    public render() {
        if (this.props.store.filters.length !== 0) {
            return (
                <div>
                    <FilterList
                        store={this.props.store}
                    />
                    <ImageModal
                        imageUrl={this.props.store.FilterImageUrl}
                        show={this.props.store.FilterImageModalVisible}
                        onHide={() => { this.props.store.HideFilterImage(); }}
                        modalId="FilterImageModal"
                        imageId="FilterImageModalImage"
                        title={this.props.store.FilterImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <ImageModal
                        imageUrl={this.props.store.FilterDrawingUrl}
                        show={this.props.store.FilterDrawingModalVisible}
                        onHide={() => { this.props.store.HideFilterDrawing(); }}
                        modalId="FilterDrawingModal"
                        imageId="FilterDrawingModalImage"
                        title={this.props.store.FilterImageTitle}
                        closeText={this.props.store.polyglot.t("Close")}
                    />
                    <ReverseModal
                        store={this.props.store}
                        onHide={() => { this.props.store.HideReversedBikes(); }}
                        show={this.props.store.FilterReverseModalVisible}
                        title={this.props.store.FilterReverseTitle}
                    >
                    </ReverseModal>
                </div>
            );
        } else {
            return null;
        }
    }
}