import App from "../App";
import renderer from "react-test-renderer";


test("Application renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
