const { config } = require("dotenv");

require("dotenv").config();

module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPORT: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  DB_URL: process.env.DB_URL,
};
