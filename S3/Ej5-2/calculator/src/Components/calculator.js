import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    let message;

    if(num1 === "" || num2 === "" ){
        message = "Debes completar ambos campos"
    }
    else{
        message = "el resultado es " + num1*num2
    }

  return(

    <form>
      <div class="form-group">
        <label>Numero 1</label>
        <input
          type="number"
          class="form-control"
          id="num1"
          name="num1"
          aria-describedby="num1"
          onChange={(event) => setNum1(event.target.value)} 
          value = {num1}
        />
        </div>
        <div class="form-group">
        <label>Numero 2</label>
        <input
          type="number"
          class="form-control"
          id="num2"
          name="num2"
          aria-describedby="num2"
          onChange={(event) => setNum2(event.target.value)}
          value = {num2}
        />
      </div>
      {message}
    </form>

  )
}


export default Calculator;
