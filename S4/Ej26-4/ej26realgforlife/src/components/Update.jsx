import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";

export default function Update(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Actualizar cantidad de pasos por:</p>
      <input type="number" name="inputStep" id="inputStep" />{" "}
      <Button
        color="warning"
        onClick={() => {
          dispatch({
            type: "UPDATE_STEP",
            payload: parseInt(document.getElementById("inputStep").value),
          });
        }}
      >
        Actualizar
      </Button>
    </div>
  );
}
