const socialMediaContent = require("../../query/social_media_content");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user_billboard_id, social_media_content_name, description, config } = req.body;

    let params = {};
    if (user_billboard_id) {
      params.user_billboard_id = user_billboard_id;
    }
    if (social_media_content_name) {
      params.social_media_content_name = social_media_content_name;
    }
    if (description) {
      params.description = description;
    }
    if (config) {
      if (typeof config === "object") {
        params.config = JSON.stringify(config);
      } else {
        params.config = config;
      }
    }
    const response = await socialMediaContent.create(params);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
