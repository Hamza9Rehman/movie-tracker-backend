const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const UserMovie = sequelize.define('UserMovie', {
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: DataTypes.INTEGER
});

module.exports = UserMovie;
