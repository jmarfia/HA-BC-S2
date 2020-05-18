module.exports = function (sequelize, Sequelize) {
  //modelo de una tabla
  const Model = Sequelize.Model;
  class Author extends Model {
    static validPassword(password) {
      return true;
    }
  }
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
      password: {
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
  return Author;
};