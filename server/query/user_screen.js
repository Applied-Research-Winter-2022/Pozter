const db = require("../connection/pg");
const Joi = require("joi");

const createSchema = Joi.object().keys({
  screen_canvas_id: Joi.string().guid().required(),
  user_billboard_id: Joi.string().guid().required(),
  user_screen_name: Joi.string(),
  description: Joi.string(),
  config: Joi.string(),
});

const idSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

module.exports = {
  async create({ screen_canvas_id, user_billboard_id, user_screen_name, description, config }) {
    const validation = createSchema.validate({ screen_canvas_id, user_billboard_id, user_screen_name, description, config });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const result = await db
        .query(
          `INSERT INTO user_screens (screen_canvas_id, user_billboard_id, user_screen_name, description, config) VALUES ('${screen_canvas_id}', '${user_billboard_id}', '${user_screen_name}', '${description}', '${config}') returning id`
        )
        .then((res) => res.rows)
        .catch((err) => Promise.reject(err));
      return result;
    }
  },

  async fetchById(id) {
    const validation = idSchema.validate({ id });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const userScreens = await db.query(`SELECT * FROM user_screens WHERE id = '${id}'`);
      return userScreens;
    }
  },

  async fetchAll() {
    const userScreens = await db.query(`SELECT * FROM user_screens`);
    return userScreens;
  },
};