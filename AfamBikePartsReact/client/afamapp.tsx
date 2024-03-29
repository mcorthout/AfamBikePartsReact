import * as React from "react";
import * as ReactDOM from "react-dom";
import { Parts } from "./parts";
import { PartBrands } from "./constants";

function renderApp() {
    const root = document.getElementById("react-app");

    if (root) {
        const language: string = root.dataset.language || "en";
        let parts: number | undefined = Number(root.dataset.parts);

        if (!parts) {
            const brands = root.dataset.parts;
            if (brands) {
                const brandArray = brands.replace(" ", "").split(",");
                parts = brandsToParts(brandArray);
            } else {
                parts = 0;
            }
        }

        ReactDOM.render(
            <Parts language={language} parts={parts}></Parts>, root,
        );
    }
}

function brandsToParts(brands: string[]): number {

    let parts: number = 0;

    for (const brand of brands) {
        parts += PartBrands[brand]
    }

    return parts;
}

renderApp();
