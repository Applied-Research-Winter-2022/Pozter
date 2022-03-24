const db = require("../connection/pg");
const Joi = require("joi");

const createSchema = Joi.object().keys({
  user_billboard_id: Joi.string().guid().required(),
  social_media_content_name: Joi.string(),
  description: Joi.string(),
  config: Joi.string(),
});

const idSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

module.exports = {
  async create({ user_billboard_id, social_media_content_name, description, config }) {
    const validation = createSchema.validate({ user_billboard_id, social_media_content_name, description, config });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const result = await db
        .query(
          `INSERT INTO social_media_contents (user_billboard_id, social_media_content_name, description, config) VALUES ('${user_billboard_id}','${social_media_content_name}','${description}','${config}') returning id`
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
      const socialMedia = await db.query(`SELECT * FROM social_media_contents WHERE id = '${id}'`);
      return socialMedia.rows;
    }
  },

  async fetchByUserBillboardId(id) {
    const validation = idSchema.validate({ id });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const socialMedia = await db.query(`SELECT * FROM social_media_contents WHERE user_billboard_id = '${id}'`);
      return socialMedia.rows;
    }
  },
};
