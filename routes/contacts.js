const express = require("express");
const router = express.Router();

//@Route  Get '/api/contact'
//@desc    get all user contacts
//@access   private
router.get("/", (req, res) => {
  res.json({ msg: "get all contacts" });
});

//@Route  post '/api/contact/:id'
//@desc    add a contact
//@access   private
router.post("/", (req, res) => {
  res.json({ msg: "add a contact" });
});

//@Route  PUT '/api/contact'
//@desc    update a contact
//@access   private
router.put("/:id", (req, res) => {
  res.json({ msg: "update contact" });
});

//@Route  DELETE '/api/contact/:id'
//@desc    delete a contact
//@access   private
router.get("/:id", (req, res) => {
  res.json({ msg: "delete contact" });
});

module.exports = router;
