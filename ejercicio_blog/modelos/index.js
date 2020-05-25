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
const User = require("./user")(sequelize, Sequelize);

Article.belongsTo(User);
User.hasMany(Article);

module.exports = {
  Article,
  User
};