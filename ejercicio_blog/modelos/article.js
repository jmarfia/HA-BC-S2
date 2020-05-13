module.exports = function (sequelize, Sequelize) {
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
      authorId: {
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

  return Article;
};