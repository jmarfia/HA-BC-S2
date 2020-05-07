const http = require("http");
const express = require("express");
var bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "autores",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("¡Nos conectamos a la BD!");
});


let articulosdb = [];

app.get("/", function (req, res) {
  connection.query("SELECT * FROM autores", function (err, articulos) {
    if (err) throw err;
    articulosdb = JSON.stringify(articulos);
    console.log(articulosdb);
    connection.end();
    res.render("home", { value: articulosdb });
    res.end();
  });
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);
