const sequelize = require('../sequelize');
const User = require('./user');
const Movie = require('./movie');
const UserMovie = require('./usermovie');

User.belongsToMany(Movie, { through: UserMovie });
Movie.belongsToMany(User, { through: UserMovie });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Tables created");
  } 
  catch (err) {
    console.error("Tables not created:", err);
  }
})();

module.exports = { sequelize, User, Movie, UserMovie };