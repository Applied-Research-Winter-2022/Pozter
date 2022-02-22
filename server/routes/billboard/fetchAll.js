const billboard = require("../../query/billboard");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await billboard.fetchAll();
    res.json(response);
  } catch (error) {
    console.error("GET billboards: ", error);
  }
});

module.exports = router;
