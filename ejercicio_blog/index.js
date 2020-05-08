const http = require("http");
const express = require("express");
const DBLocal = require("db.js");
var bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");



app.get("/", function (req, res) {
  DBLocal.getData(function (articlesDB) {
    console.log(articlesDB);
    res.render("home", { articulos: articlesDB });
  }, DBLocal.queryArticles);
  //res.end(); no se por que no me anda si pongo el res.end
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);











// traer articulos FUNCIONA
// DBLocal.getData(function(articlesDB){
//   console.log(articlesDB)
// },DBLocal.queryArticles)