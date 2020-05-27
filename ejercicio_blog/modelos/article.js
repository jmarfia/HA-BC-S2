module.exports = function (sequelize, Sequelize) {
  //modelo de una tabla
  const Op = Sequelize.Op;
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
      userId: {
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



  return Article;
};