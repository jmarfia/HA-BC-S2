const bcrypt = require("bcryptjs");

module.exports = function (sequelize, Sequelize) {
  //modelo de una tabla
  const Model = Sequelize.Model;
  class Author extends Model {
    validPassword(password, callback) {
      bcrypt.compare(password, this.password, (err, isMatch) => {
        err ? callback(err, false) : callback(null, isMatch);
      });
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
      facebookId: {
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
