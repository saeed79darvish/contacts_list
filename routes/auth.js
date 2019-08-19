const express = require("express");
const router = express.Router();

//@Route    GET '/api/auth'
//@desc    get login  user
//@access   private
router.get("/", (req, res) => {
  res.send("get login user");
});

//@Route    GET '/api/auth'
//@desc    Auth user and get token
//@access   public
router.post("/", (req, res) => {
  res.json({ msg: "post login user" });
});

module.exports = router;
