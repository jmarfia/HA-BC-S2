const http = require("http");
const express = require("express");
const app = express();
const moment = require("moment");

moment.locale("es");
let dayText = moment().format("dddd");
let days = {
  lunes: "Hoy es dia de semana",
  martes: "Hoy es dia de semana",
  miércoles: "Hoy es dia de semana",
  jueves: "Hoy es dia de semana",
  viernes: "Hoy es dia de semana",
  sábado: "Hoy es fin de semana",
  domingo: "Hoy es fin de semana",
};

let dayMsg = days[dayText]

let products = ["Monitor", "Teclado", "Mouse", "Pendrive", "Auriculares", "Parlantes"]

app.set("view engine", "ejs");

app.get("/contacto", function (req, res) {
  res.render("contacto");
});
app.get("/productos", function (req, res) {
  res.render("productos", {productList: products});
});
app.get("/", function (req, res) {
  res.render("index", {msgDate: dayMsg});
});
app.get("/sobre-nosotros", function (req, res) {
  res.render("sobre-nosotros");
});

app.get("*", function (req, res) {
  res.status(404).end();
});

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));
