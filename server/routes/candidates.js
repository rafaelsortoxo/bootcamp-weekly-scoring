const express = require('express');
const mongoose = require('mongoose');
const { isLoggedIn, isNotIc } = require('../middleware/auth');

const User = mongoose.model('User');
const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  switch (req.user.role) {
    case 'sem':
    case 'manager':
      const candidates = await User.find().sort({ displayName: 1 });
      return res.json({
        candidates
      });
    default:
      return res.json({
        candidates: [req.user]
      });
  }
});

router.post('/', isLoggedIn, isNotIc, async (req, res, next) => {
  try {
    req.body.role = req.query.role || req.body.role;
    const candidate = await User.create(req.body);
    res.json({ candidate });
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
});

router.patch('/:id', isLoggedIn, isNotIc, async (req, res, next) => {
  // TODO: sanitize data
  try {
    const candidate = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true
      }
    );

    res.json({ candidate });
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
});

router.patch(
  '/:id/weeks/:weekId',
  isLoggedIn,
  isNotIc,
  async (req, res, next) => {
    try {
      // TODO: sanitize data
      const result = await User.findOne({ _id: req.params.id });
      const toUpdate = {};
      toUpdate[`week${req.params.weekId}Data`] = {
        ...result[`week${req.params.weekId}Data`],
        ...req.body
      };

      const candidate = await User.findOneAndUpdate(
        { _id: req.params.id },
        toUpdate,
        { new: true }
      );

      res.json({ candidate });
    } catch (e) {
      res.status(422).json({ error: e.message });
    }
  }
);

module.exports = router;
