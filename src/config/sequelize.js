require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected successfully');
  } 
  catch (error) {
    console.error('Connection failed: ', error);
  }
})();

module.exports = sequelize;