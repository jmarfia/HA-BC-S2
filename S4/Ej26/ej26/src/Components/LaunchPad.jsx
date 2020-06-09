import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";


export default function LaunchPad(props) {


  function sum() {
    props.setSteps(props.steps + 1);
  }

  function subst() {
    props.setSteps(props.steps - 1);
  }
  return (
    <div>
      <Button onClick={subst} color="warning">
        Eliminar un paso
      </Button>
      <Button onClick={sum} color="primary">
        Agregar un paso
      </Button>
      <p>Actualizar cantidad de pasos por:</p>
      <input type="number" name="inputStep" id="inputStep" />{" "}
      <Button
        onClick={(event) => props.setSteps(event.target.value)}
        color="secondary"
      >
        Actualizar
      </Button>
    </div>
  );
}
