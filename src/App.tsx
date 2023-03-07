import * as React from "react";
import "./App.css";
import { useResponsiveness, ResponsivenessProvider } from "../lib";

const WithResponsiveness = () => (
  <ResponsivenessProvider>
    <App />
  </ResponsivenessProvider>
);
function App() {
  const { currentInterval, isMax } = useResponsiveness();
  return (
    <div className="App">
      <TestComponent />
      <div>Current: {currentInterval}</div>
      { isMax('')}
    </div>
  );
}

function TestComponent() {
  const { matches } = useResponsiveness();
  return <pre>{JSON.stringify(matches, null, 2)}</pre>;
}

export default WithResponsiveness;
