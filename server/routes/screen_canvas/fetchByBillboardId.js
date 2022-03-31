const screenCanvas = require("../../query/screen_canvas");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await screenCanvas.fetchByBillboardId(id);
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET screen_canvas: ", error);
  }
});

module.exports = router;