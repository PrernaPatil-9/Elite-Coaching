const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ success: true, message: 'Message saved' });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Error saving message' });
  }
});

module.exports = router;
