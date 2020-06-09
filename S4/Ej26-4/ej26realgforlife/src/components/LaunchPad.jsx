import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";

function LaunchPad(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Log from stepcount", props.stepCount);
  }, [props.stepCount]);

  return (
    <div>
      <p>{props.stepCount}</p>

      <Button
        color="warning"
        onClick={() => {
          dispatch({
            type: "RESOLVE_STEP",
            payload: -1,
          });
        }}
      >
        Eliminar un paso
      </Button>
      <Button
        color="primary"
        onClick={() => {
          dispatch({
            type: "RESOLVE_STEP",
            payload: 1,
          });
        }}
      >
        Agregar un paso
      </Button>
    </div>
  );
}

export default LaunchPad;
