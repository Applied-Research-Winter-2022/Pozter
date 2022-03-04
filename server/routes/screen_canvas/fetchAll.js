const screenCanvas = require("../../query/screen_canvas");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await screenCanvas.fetchAll();
    res.json(response);
  } catch (error) {
    console.error("GET screen_canvases: ", error);
  }
});

module.exports = router;