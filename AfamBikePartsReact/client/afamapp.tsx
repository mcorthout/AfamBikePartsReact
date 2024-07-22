import * as React from "react";
import * as ReactDOM from "react-dom/client";
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

        const reactRoot = ReactDOM.createRoot(root);

        reactRoot.render(
            <Parts language={language} parts={parts}></Parts>
        );
    }
}

function brandsToParts(brands: string[]): number {

    let parts: number = 0;

    for (var brand of brands) {
        parts += PartBrands[brand as keyof typeof PartBrands]
    }

    return parts;
}

renderApp();
