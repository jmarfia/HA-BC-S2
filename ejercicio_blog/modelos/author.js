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

function getAuthorById(parmID, callback) {
    Author.findAll({
        where: {
          id: parmID,
        },
      }).then((author) => {
    callback(author)
  });
}
module.exports = {
    getAuthorById: getAuthorById,
    function (sequelize, DataTypes) {
        Author
    }
};