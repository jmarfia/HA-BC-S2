const http = require("http");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/multiplicar", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  res.send("El resultado es " + num1 * num2 + "");
  res.end();
});

app.listen(3001);
