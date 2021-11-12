require("dotenv").config();

const env = process.env;
const config = {
  DOMAIN: env.DOMAIN || "http://localhost:3000/",
  db: {
    user: env.DB_USER || "root",
    host: env.DB_HOST || "localhost",
    database: env.DB_NAME || "test",
    password: env.DB_PASSWORD || "root",
    port: env.DB_PORT || "3606",
  },
};

module.exports = config;
