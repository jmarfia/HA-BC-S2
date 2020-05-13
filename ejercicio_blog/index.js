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
//router.get("/articulo/:id", (req, res) => { articleController.getOneArticle(req) }); //el de santiago
//app/get("/articulos", funcionautomaticamente toma como parametro req y res)

const Sequelize = require('sequelize');

// instancia de sqlz con credenciales
const sequelize = new Sequelize('ejblogdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});


//conexion a la db
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  //modelo de una tabla
  const Model = Sequelize.Model;
  class Author extends Model {}
  Author.init({
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'author'
    // options
  });

  // Note: using `force: true` will drop the table if it already exists
Author.sync({ force: false }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return Author.create({
    firstName: 'John',
    lastName: 'Hancock',
    email: "hola@hola.edu"
  });
});

Author.create({ firstName: "Santiago", lastName: "Rullan", email: "chau@gmail.com" }).then(santiago => {
  console.log("Santiagos's auto-generated ID:", santiago.id);
});


Author.sync();


Author.findAll().then(authors => {
  console.log("All users:", JSON.stringify(authors, null, 4));
});




app.listen(3000);
