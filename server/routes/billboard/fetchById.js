const billboard = require("../../query/billboard");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const response = await billboard.fetchById(id);
    res.json(response);
  } catch (error) {
    console.error("GET billboard: ", error);
  }
});

module.exports = router;
