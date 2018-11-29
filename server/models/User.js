const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  active: {
    type: Boolean,
    default: true
  },
  displayName: String,
  googleId: String,
  tech: String,
  role: {
    type: String,
    default: 'ic'
  },
  position: String,
  week1Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String,
    finalScore: Number
  },
  week2Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String,
    finalScore: Number
  },
  week3Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String,
    finalScore: Number
  },
  week4Data: {
    startDate: Date,
    productivity: Array,
    ftar: Array,
    scores: Array,
    SEM: String,
    team: String,
    comments: String,
    finalScore: Number
  },
  bootcampCompleted: {
    type: Boolean,
    default: false
  },
  bootcampPassed: Boolean,
  bootcampReason: String,
  currentWeek: {
    type: Number,
    default: 1
  },
  notes: String,
  aureaEmail: String,
  privateEmail: String,
  hiringManager: String,
  skype: String
});

module.exports = mongoose.model('User', userSchema);
