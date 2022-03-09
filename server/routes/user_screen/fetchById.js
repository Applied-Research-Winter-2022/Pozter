const userScreen = require("../../query/user_screen");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await userScreen.fetchById(id);
    res.json(response);
  } catch (error) {
    console.error("GET user_screen: ", error);
  }
});

module.exports = router;