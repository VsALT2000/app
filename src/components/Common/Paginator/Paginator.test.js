import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 10 and current page is 1 then should be showed only 4", () => {
        const component = create(<Paginator totalItemsCount={10} pageSize={1} currentPage={1} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(4);
    });

    test("pages count is 3 but should be showed only 3", () => {
        const component = create(<Paginator totalItemsCount={3} pageSize={1} currentPage={2} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(3);
    });

    test("items count is 0 then shouldn't be showed", () => {
        const component = create(<Paginator totalItemsCount={0} pageSize={1} currentPage={1} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(0);
    });

    test("pages count is 9 and current page is 5 then should be showed only 7", () => {
        const component = create(<Paginator totalItemsCount={9} pageSize={1} currentPage={5} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(7);
    });
});