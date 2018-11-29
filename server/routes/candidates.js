const express = require('express');
const mongoose = require('mongoose');
const { isLoggedIn } = require('../middleware/auth');

const User = mongoose.model('User');
const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  switch (req.user.role) {
    case 'sem':
    case 'manager':
      const candidates = await User.find();
      return res.json({
        candidates
      });
    default:
      return res.json({
        candidates: [req.user]
      });
  }
});

module.exports = router;
