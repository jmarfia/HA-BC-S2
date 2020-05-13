'use strict';
module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Autor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Autor.associate = function(models) {
    // associations can be defined here
  };
  return Autor;
};