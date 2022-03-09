const userScreen = require("../../query/user_screen");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await userScreen.fetchAll();
    res.json(response);
  } catch (error) {
    console.error("GET user_screens: ", error);
  }
});

module.exports = router;