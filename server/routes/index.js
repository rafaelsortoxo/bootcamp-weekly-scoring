const express = require('express');
const { isLoggedIn } = require('../middleware/auth');

const router = express.Router();

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/bootcampers', isLoggedIn, (req, res) => {
  console.log(req.user);
  if (req.user.role === 'manager') {
  } else if (req.user.role === 'sem') {
  } else if (req.user.role === 'ic') {
    return res.send('OK');
  }
  res.send(401, 'Unauthorized');
});

module.exports = router;
