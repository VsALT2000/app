import AboutMe from "./AboutMe";
import {create} from "react-test-renderer";



describe("Profile AboutMe component", () => {
    test("status from props should be in the state", () => {
        let component = create(<AboutMe status={"Hello world!"}/>)
        const root = component.root;
        const span = root.findAllByType("span");
        expect(span.length).toBe(1);
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<AboutMe status="Hello world!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<AboutMe status="Hello world!" />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<AboutMe status="Hello world!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello world!");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<AboutMe status="Hello world!" />);
        const root = component.root;
        let div = root.findByType("span").parent;
        div.props.onClick();
        let input = root.findByType("textarea");
        expect(input.props.value).toBe("Hello world!");
    });
});