const http = require("http");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({
//   extended: false
// }));

app.use(express.urlencoded({ extended: true}))


let fruitList = ["Manzana", "Pera", "Frutilla"];

app.get("/", function (req, res) {
  res.render("index", { value: fruitList });
});

app.post("/", function (req, res) {
  var query1=req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);
