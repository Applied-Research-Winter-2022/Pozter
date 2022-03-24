const userBillboard = require("../../query/user_billboard");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const response = await userBillboard.fetchByIdFull(id);
    res.json(response);
  } catch (error) {
    res.json(error);
    console.error("GET user_billboard: ", error);
  }
});

module.exports = router;
