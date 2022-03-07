const db = require("../connection/pg");

module.exports = {
  async fetchById(id) {
    const screenCanvas = await db.query(`SELECT * FROM screen_canvases WHERE id = '${id}'`);
    return screenCanvas;
  },

  async fetchAll() {
    const screenCanvases = await db.query(`SELECT * FROM screen_canvases`);
    return screenCanvases;
  },
};
