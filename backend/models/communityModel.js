const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const communitySchema = mongoose.Schema({
  // organizationID: Number,
  title: String,
  description: String,
});

module.exports = mongoose.model('Community', communitySchema);