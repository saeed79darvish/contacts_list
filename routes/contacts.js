const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");

//@Route    Get '/api/contact'
//@desc     get all user contacts
//@access   private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

//@Route    POST '/api/contact/:id'
//@desc     add a contact
//@access   private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is Required")
        .not()
        .isEmpty()
    ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, phone, email, type } = req.body;
    const newContats = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });
    const contact = await newContats.save();
    res.json(contact);
    try {
    } catch (err) {
      console.error(err.message);
      res.status(400).send("server error");
    }
  }
);

//@Route    PUT '/api/contact'
//@desc     update a contact with id
//@access   private
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  const contactFiled = {};
  if (name) contactFiled.name = name;
  if (email) contactFiled.email = email;
  if (phone) contactFiled.phone = phone;
  if (type) contactFiled.type = type;

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(400).json({ msg: "Contact Not Found" });
    //Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFiled },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

//@Route    DELETE '/api/contact/:id'
//@desc     delete a contact with id
//@access   private
router.delete("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(400).json({ msg: "Contact Not Found" });
    //Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});

module.exports = router;
