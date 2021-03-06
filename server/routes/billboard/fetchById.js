const billboard = require("../../query/billboard");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await billboard.fetchById(id);
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET billboard: ", error);
  }
});

module.exports = router;
