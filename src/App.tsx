import * as React from "react";
import "./App.css";
import { useReactResponsiveness } from "../lib";

function App() {
  const { addListeners, currentInterval } = useReactResponsiveness();
  React.useLayoutEffect(() => {
    addListeners();
  }, []);

  return (
    <div className="App">
      <TestComponent />
      <div>Current: {currentInterval}</div>
    </div>
  );
}

function TestComponent() {
  const { matches } = useReactResponsiveness();
  return <pre>{JSON.stringify(matches, null, 2)}</pre>;
}

export default App;
