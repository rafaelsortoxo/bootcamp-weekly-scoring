const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  tech: String,
  role: {
    type: String,
    default: 'ic'
  },
  week1Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String
  },
  week2Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String
  },
  week3Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String
  },
  week4Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String
  },
  bootcampCompleted: {
    type: Boolean,
    default: false
  },
  currentWeek: {
    type: Number,
    default: 1
  },
  notes: String,
  graduated: Boolean,
  aureaEmail: String,
  privateEmail: String,
  hiringManager: String,
  skype: String,
  active: Boolean
});

module.exports = mongoose.model('User', userSchema);
