const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

//@Route    GET '/api/auth'
//@desc     get login  user
//@access   private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

//@Route    GET '/api/auth'
//@desc    Auth user and get token
//@access   public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with six or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password, email } = req.body;
    try {
      let user = await User.findOne({ email });
      // console.log(user.name);
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credential" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credential" });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;

        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).send("server error");
    }
  }
);

module.exports = router;
