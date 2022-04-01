const userBillboard = require("../../query/user_billboard");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (typeof req.body.config === "object") {
      req.body.config = JSON.stringify(req.body.config);
    }
    const response = await userBillboard.create(req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
