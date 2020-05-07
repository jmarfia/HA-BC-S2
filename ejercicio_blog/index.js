const http = require("http");
const express = require("express");
const dblocal = require("db.js")
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.get("/", function (req, res) {
  traerUsuarios(function (usersdb) {
    res.render("home", { users: usersdb });
    //console.log(usersdb)
    res.end();
  });
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);
