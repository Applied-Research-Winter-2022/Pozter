const socialMediaContent = require("../../query/social_media_content");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await socialMediaContent.fetchByUserBillboardId(id);
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET social media content by user billboard id: ", error);
  }
});

module.exports = router;
