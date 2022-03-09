const db = require("../connection/pg");

module.exports = {
  async create({ screen_canvas_id, user_billboard_id, user_screen_name, description, config }) {
    let query = "INSERT INTO user_screens (screen_canvas_id, user_billboard_id, user_screen_name, description, config) ";
    query += `VALUES ('${screen_canvas_id}', '${user_billboard_id}', '${user_screen_name}', '${description}', '${config}')`;
    return db.query(query);
  },

  async fetchById(id) {
    const userScreens = await db.query(`SELECT * FROM user_screens WHERE id = '${id}'`);
    return userScreens;
  },

  async fetchAll() {
    const userScreens = await db.query(`SELECT * FROM user_screens`);
    return userScreens;
  },
};