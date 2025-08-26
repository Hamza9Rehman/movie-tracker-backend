const sequelize = require("../config/sequelize");
const User = require('./user');
const Movie = require('./movie');
const UserMovie = require('./usermovie');

User.belongsToMany(Movie, { through: UserMovie });
Movie.belongsToMany(User, { through: UserMovie });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Synced successfully");
  } 
  catch (err) {
    console.error("Syncing error:", err);
  }
})();

module.exports = { sequelize, User, Movie, UserMovie };