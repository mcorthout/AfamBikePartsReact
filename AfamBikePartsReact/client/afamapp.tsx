import * as React from "react";
import { createRoot } from "react-dom/client";
import { Parts } from "./parts";

function renderApp() {
    const rootElement = document.getElementById("react-app");

    if (rootElement) {
        const language: string = rootElement.dataset.language || "en";
        const root = createRoot(rootElement);
        root.render(
            <Parts language={language}></Parts>
        );
    }
}

renderApp();
