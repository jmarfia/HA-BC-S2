const Sequelize = require("sequelize");

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

const Article = require("./article")(sequelize, Sequelize);
const Author = require("./author")(sequelize, Sequelize);

Article.belongsTo(Author);
Author.hasMany(Article);

module.exports = {
  Article,
  Author
};