const http = require("http");
const express = require("express");
const DBLocal = require("db.js");
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

//app.use(express.json());

// traer articulos FUNCIONA
// DBLocal.getData(function(articlesDB){
//   console.log(articlesDB)
// },DBLocal.queryArticles)

app.get("/", function (req, res) {
  DBLocal.getData(function (articlesDB) {
    console.log(articlesDB);
    res.render("home", { articulos: articlesDB });
  }, DBLocal.queryArticles);

  // traerUsuarios(function (usersdb) {
  //   res.render("home", { users: usersdb });
  //   //console.log(usersdb)
  //   res.end();
  // });
  //res.end();
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);
