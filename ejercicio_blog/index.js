const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const path = require("path");

const articleModel = require("./modelos/article");

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
app.get("/pruebasqlz", postController.sqlz);

//router.get("/articulo/:id", (req, res) => { articleController.getOneArticle(req) }); //el de santiago
//app/get("/articulos", funcionautomaticamente toma como parametro req y res)




app.listen(3000);
