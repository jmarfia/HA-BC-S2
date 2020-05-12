const http = require("http");
const express = require("express");
const DBLocal = require("./db");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public/css"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {

  DBLocal.getData(function (articlesDB) {
    res.render("home", { articulos: articlesDB });
  }, DBLocal.queryAllArticles);
  
});

app.get("/articulo", function (req, res) {
  const articuloID = req.query.articuloID;
  DBLocal.getData(function (articlesDB) {
    console.log(articlesDB);
    res.render("articulo", { articulo: articlesDB });
  }, DBLocal.queryGetArticle + articuloID);
});

app.get("/modificararticulo", function (req, res) {
  const articuloID = req.query.articuloID;
  DBLocal.getData(function (articlesDB) {
    //console.log(articlesDB);
    res.render("modificararticulo", { articulo: articlesDB });
  }, DBLocal.queryGetArticle + articuloID);
});

app.get("/setarticulo", function (req, res) { //post req.body
  const articuloID = req.query.articuloID;
  const articulomodificado = req.query.articulomodificado;
  console.log(articuloID, articulomodificado)
  DBLocal.getData(function (articlesDB) {
    //console.log(articlesDB);
    res.redirect("/adminpanel");
  }, DBLocal.updateArticle1 + "'" + articulomodificado + "'" + DBLocal.updateArticle2 + articuloID);
});

app.get("/borrararticulo", function (req, res) {
  const articuloID = req.query.articuloID;
  DBLocal.getData(function (articlesDB) {
    //console.log(articlesDB);
    //res.render("adminpanel", { articulos: articlesDB });
    res.redirect("/adminpanel");
  }, DBLocal.queryDeleteArticle + articuloID);
  //res.end(); no se por que no me anda si pongo el res.end
});

app.get("/adminpanel", function (req, res) {
  DBLocal.getData(function (articlesDB) {
    //console.log(articlesDB);
    res.render("adminpanel", { articulos: articlesDB });
  }, DBLocal.queryAllArticles);
  //res.end(); no se por que no me anda si pongo el res.end
});

app.post("/asf", function (req, res) {
  var query1 = req.body.fruta;
  fruitList.push(query1);
  res.render("index", { value: fruitList });
});

app.listen(3000);
