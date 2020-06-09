import React, { useState } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

export default function Update(props) {

  return (
    <div>
      <p>Actualizar cantidad de pasos por:</p>
      <input type="number" name="inputStep" id="inputStep" />{" "}
      <Button
        onClick={(event) => setSteps(event.target.value)}
        color="secondary"
      >
        Actualizar
      </Button>
    </div>
  );
}
