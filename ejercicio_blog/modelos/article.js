const Sequelize = require("sequelize");
const db = require("../db");
const authorModel = require("../modelos/author");
 

// instancia de sqlz con credenciales
const sequelize = new Sequelize("ejblogdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//conexion a la db
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//modelo de una tabla
const Model = Sequelize.Model;
class Article extends Model {}
Article.init(
  {
    // attributes
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contenido: {
      type: Sequelize.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    idAutores: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    modelName: "article",
    // options
  }
);

Article.sync();

const Op = Sequelize.Op;

function getArticles(callback) {
  Article.findAll().then((articles) => {
    callback(articles)
    //console.log("All users:", JSON.stringify(pepe, null, 4));
  });
}

// function getArticles2(callback) {
//   Article.findAll({
//     include: [{
//       model: author,
//       required: true
//      }]
//   }).then((articles) => {
//     callback(articles)
//     //console.log("All users:", JSON.stringify(pepe, null, 4));
//   });
// }





module.exports = {
  getArticles
  //getArticles2
};



// function crearAutor(){

// Author.create({ firstName: "Pepito", lastName: "Sueco", email: "sueco@hla.com"});

// Author.findAll().then((authors) => {
//     console.log("Users:", JSON.stringify(authors, null, 4));
//   });
// }


// function encontrarArticulo(paramId) {
//   Article.findAll({
//     where: {
//       id: paramId,
//     },
//   }).then((article) => {
//     console.log("articulo:", JSON.stringify(article, null, 4));
//   });
// }




