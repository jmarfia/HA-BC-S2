const http = require("http");
const express = require("express");
const DBLocal = require("./db");
const postController = require("./controller/postController");
const path = require("path");

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

app.listen(3000);
