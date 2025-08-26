const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Movie = sequelize.define('Movie', {
  title: DataTypes.STRING,
  director: DataTypes.STRING,
  year: DataTypes.INTEGER
});

module.exports = Movie;