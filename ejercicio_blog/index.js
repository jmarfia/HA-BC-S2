const http = require("http");
const express = require("express");
const db = require("./db");
const path = require("path");
const postController = require("./controller/postController")

const app = express();

app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));


app.get("/", postController.getAllArticles);
app.get("/articulo", postController.getArticleById);
app.get("/modificararticulo", postController.editArticleById);
app.get("/setarticulo", postController.updateArticleById);
app.get("/borrararticulo", postController.deleteArticleById);
app.get("/adminpanel", postController.adminPanel);
app.get("/contacto", postController.contacto);
//router.get("/articulo/:id", (req, res) => { articleController.getOneArticle(req) }); //el de santiago
//app/get("/articulos", funcionautomaticamente toma como parametro req y res)


////////////////////////////////////////////////////////////////////////////////////////
const Sequelize = require('sequelize');

const sequelize = new Sequelize('blogdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


////////////////////////////////////////////////////////////////////////////////////////

app.listen(3000, console.log("Servidor en el puerto 3000"));