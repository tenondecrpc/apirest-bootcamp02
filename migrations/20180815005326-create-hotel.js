'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hoteles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        field: 'nombre',
        type: Sequelize.STRING(100)
      },
      direccion: {
        allowNull: false,
        field: 'direccion',
        type: Sequelize.STRING(100)
      },
      latitud: {
        allowNull: false,
        field: 'latitud',
        type: Sequelize.DECIMAL(20,2)
      },
      longitud: {
        allowNull: false,
        field: 'longitud',
        type: Sequelize.DECIMAL(20,2)
      },
      imagenUrl: {
        allowNull: true,
        field: 'imagen_url',
        type: Sequelize.TEXT,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hoteles');
  }
};