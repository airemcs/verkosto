const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  // tagID: Number,
  title: String,
  description: String
});

module.exports = mongoose.model('Tag', tagSchema);