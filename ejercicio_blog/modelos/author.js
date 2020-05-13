const Sequelize = require("sequelize");
const db = require("../db");

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
class Author extends Model {}
Author.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    modelName: "author",
    // options
  }
);

Author.sync();

const Op = Sequelize.Op;

function encontrarAutor(paramId) {
  Author.findAll({
    where: {
      id: paramId,
    },
  }).then((authors) => {
    console.log("User:", JSON.stringify(authors, null, 4));
  });
}



function crearAutor(){

Author.create({ firstName: "Pepito", lastName: "Sueco", email: "sueco@hla.com"});

Author.findAll().then((authors) => {
    console.log("Users:", JSON.stringify(authors, null, 4));
  });
} 
// Author.findAll().then(authors => {
//   console.log("All users:", JSON.stringify(authors, null, 4));
// });


module.exports= {
    encontrarAutor: encontrarAutor,
    crearAutor: crearAutor
}