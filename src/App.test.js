import App from "./App";
import ReactDOM from "react-dom";

it('render without crashing', function () {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});