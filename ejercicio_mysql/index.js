const http = require("http");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());

const mysql = require("mysql");

function traerUsuarios(callback) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ha_test",
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("¡Nos conectamos a la BD!");
  });

  connection.query("SELECT * FROM users", function (err, users) {
    if (err) throw err;
    callback(users);
  });
  connection.end();
}


app.get("/", function (req, res) {
  traerUsuarios(function (usersdb) {
    res.render("home", { users: usersdb });
    console.log(usersdb)
    res.end();
  });
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3001);
