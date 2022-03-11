const userScreen = require("../../query/user_screen");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { screen_canvas_id, user_billboard_id, user_screen_name, description, config } = req.body;

    let params = {};
    if (screen_canvas_id) {
      params.screen_canvas_id = screen_canvas_id;
    }
    if (user_billboard_id) {
      params.user_billboard_id = user_billboard_id;
    }
    if (user_screen_name) {
      params.user_screen_name = user_screen_name;
    }
    if (description) {
      params.description = description;
    }
    if (config) {
      params.config = config;
    }
    
    const response = await userScreen.create(params);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;