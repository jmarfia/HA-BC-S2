import React from "react";
import "./App.css";
import { LaunchPad, Update } from "./components";
import { useSelector } from "react-redux"



function App() {
  const stepCount = useSelector((state) => {
    return state;
  });

  return (
    <div className="App">
      <p>Actualmente hay NN pasos registrados!</p>

      <LaunchPad stepCount={stepCount}/>
      <Update />
    </div>
  );
}

export default App;
