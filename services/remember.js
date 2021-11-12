const db = require("./db");

const createContent = async (content) => {
  try {
    const result = await db.query(`INSERT INTO remember(content) VALUES(?)`, [
      content,
    ]);
    return result.insertId;
  } catch (error) {
    console.error(error);
  }

  return "";
};

const getContentById = async (content_id) => {
  try {
    const [rows] = await db.query(
      `SELECT content FROM remember WHERE content_id = ? `,
      [content_id]
    );
    return rows.content || "";
  } catch (error) {
    console.error(error);
  }
  return "";
};

module.exports = {
  createContent,
  getContentById,
};
