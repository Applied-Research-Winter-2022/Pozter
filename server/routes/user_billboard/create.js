const userBillboard = require("../../query/user_billboard");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user_id, user_billboard_name, description, socket_url, config } = req.body;

    let params = {};
    if (user_id) {
      params.user_id = user_id;
    }
    if (user_billboard_name) {
      params.user_billboard_name = user_billboard_name;
    }
    if (description) {
      params.description = description;
    }
    if (socket_url) {
      params.socket_url = socket_url;
    }
    if (config) {
      if (typeof config === "object") {
        params.config = JSON.stringify(config);
      } else {
        params.config = config;
      }
    }
    const response = await userBillboard.create(params);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
