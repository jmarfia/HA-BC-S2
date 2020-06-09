import React, { useState, useSelector } from "react";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { LaunchPad } from "./Components";

function App() {


  const [steps, setSteps] = useState(0);

  return (
    <div className="App">
      <p>Actualmente hay {steps} pasos registrados!</p>

      <LaunchPad steps={steps} setSteps={setSteps} />
    </div>
  );
}

export default App;
