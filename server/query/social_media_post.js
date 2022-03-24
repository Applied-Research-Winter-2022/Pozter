const db = require("../connection/pg");
const Joi = require("joi");

const createSchema = Joi.object().keys({
  social_media_content_id: Joi.string().guid().required(),
  content: Joi.string(),
});

const idSchema = Joi.object().keys({
  id: Joi.string().guid().required(),
});

module.exports = {
  async create({ social_media_content_id, content }) {
    const validation = createSchema.validate({ social_media_content_id, content });
    if (validation.error) {
      console.error(validation.error);
      return validation.error;
    } else {
      const result = await db
        .query(
          `INSERT INTO social_media_posts (social_media_content_id, content) VALUES ('${social_media_content_id}', '${content}') returning id`
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
      const socialMediaPost = await db.query(`SELECT * FROM social_media_posts WHERE id = '${id}'`);
      return socialMediaPost;
    }
  },

  async fetchAll() {
    const socialMediaPosts = await db.query(`SELECT * FROM social_media_posts`);
    return socialMediaPosts;
  },
};
