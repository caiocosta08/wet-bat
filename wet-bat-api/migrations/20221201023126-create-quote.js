'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('quotes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      departureLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destinationLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departureDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      returnDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      numberOfTravellers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transportationDuringTravels: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactInformation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('quotes');
  }
};
