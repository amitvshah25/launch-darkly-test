import { withLDProvider } from "launchdarkly-react-client-sdk";

const App = () => {
  return <div className="App">Hello world !</div>;
};

const LDApp = withLDProvider({
  clientSideID: "REPLACEOURCLIENTSIDEID",
  user: {
    key: "amitTest",
    name: "Amit Test",
  },
})(App);

export default LDApp;
