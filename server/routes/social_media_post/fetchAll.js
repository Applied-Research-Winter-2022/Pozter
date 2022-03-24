const socialMediaPost = require("../../query/social_media_post");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await socialMediaPost.fetchAll();
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET social_media_post: ", error);
  }
});

module.exports = router;