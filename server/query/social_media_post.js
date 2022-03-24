const db = require("../connection/pg");

module.exports = {
  async create({ social_media_content_id, content }) {
    let query = "INSERT INTO social_media_posts (social_media_content_id, content) ";
    query += `VALUES ('${social_media_content_id}', '${content}')`;
    return db.query(query);
  },

  async fetchById(id) {
    const socialMediaPost = await db.query(`SELECT * FROM social_media_posts WHERE id = '${id}'`);
    return socialMediaPost;
  },

  async fetchAll() {
    const socialMediaPosts = await db.query(`SELECT * FROM social_media_posts`);
    return socialMediaPosts;
  },
};
