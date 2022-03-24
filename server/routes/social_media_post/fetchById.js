const socialMediaPost = require("../../query/social_media_post");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await socialMediaPost.fetchById(id);
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET social_media_post: ", error);
  }
});

module.exports = router;