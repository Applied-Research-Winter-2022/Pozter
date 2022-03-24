const socialMediaPost = require("../../query/social_media_post");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { social_media_content_id, content } = req.body;

    let params = {};
    if (social_media_content_id) {
      params.social_media_content_id = social_media_content_id;
    }
    if (content) {
      if (typeof content === "object") {
        params.content = JSON.stringify(content);
      } else {
        params.content = content;
      }
    }
    const response = await socialMediaPost.create(params);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;