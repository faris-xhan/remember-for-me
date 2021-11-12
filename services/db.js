const config = require("../config");
const mysql = require("mysql2/promise");

const query = async (sql, params) => {
  try {
    const connection = await mysql.createConnection(config.db);
    const [result] = await connection.execute(sql, params);

    return result;
  } catch (error) {
    console.log(error);
  }
  return {};
};

module.exports = {
  query,
};
