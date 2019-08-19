const express = require("express");
const router = express.Router();

//@Route    POST '/api/users'
//@desc     Register a user
//@access   public
router.post("/", (req, res) => {
  res.json({ msg: "register a user" });
});

module.exports = router;
