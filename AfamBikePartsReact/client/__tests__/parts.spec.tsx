import * as React from "react";
import { mount } from "enzyme";
import { Parts } from "../parts";
import { PartBrands } from "../constants";

describe("Parts", () => {

    it("renders the application", () => {
        var result = mount(<Parts language="nl" parts={PartBrands.AFAM}></Parts>).exists("div .bike-select-container");
        expect(result).toBeTruthy();
    });

    it("show an error message if the part category is unknown", () => {
        var result = mount(<Parts language="nl" parts={1024}></Parts>).contains(<div>Invalid part categories</div>);
        expect(result).toBeTruthy();
    });

})