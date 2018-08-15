'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hotel = sequelize.define('Hotel', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    imagenUrl: {
      field: 'imagen_url',
      type: DataTypes.STRING,
    },
  }, 
  {
    timestamps: false,
    tableName: 'hoteles',
  });
  Hotel.associate = function(models) {
    // associations can be defined here
  };
  return Hotel;
};