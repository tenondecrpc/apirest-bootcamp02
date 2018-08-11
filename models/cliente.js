'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    imagenUrl: DataTypes.STRING
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};