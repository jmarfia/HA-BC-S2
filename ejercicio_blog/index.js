const http = require("http");
const express = require("express");
const db = require("./db");
const postController = require("./controller/postController");
const path = require("path");
const articleModel = require("./modelos/article")

const app = express();
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", postController.getAllArticles); //ok
app.get("/articulo", postController.getArticleById); //ok
app.get("/modificararticulo", postController.editArticleById);//ok
app.get("/setarticulo", postController.updateArticleById);//ok
app.get("/borrararticulo", postController.deleteArticleById);// ok
app.get("/adminpanel", postController.adminPanel); //ok
app.get("/contacto", postController.contacto); //ok
//app.get("/pruebasqlz", postController.sqlz);

app.listen(3000);
