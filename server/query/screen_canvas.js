const db = require("../connection/pg");
const Joi = require("joi");

const idSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

module.exports = {
  async fetchById(id) {
    const validation = idSchema.validate({ id });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const screenCanvas = await db.query(`SELECT * FROM screen_canvases WHERE id = '${id}'`);
      return screenCanvas.rows;
    }
  },

  async fetchByBillboardId(id) {
    const validation = idSchema.validate({ id });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const screenCanvas = await db.query(`SELECT * FROM screen_canvases WHERE billboard_id = '${id}'`);
      return screenCanvas.rows;
    }
  },

  async fetchAll() {
    const screenCanvases = await db.query(`SELECT * FROM screen_canvases`);
    return screenCanvases;
  },
};
