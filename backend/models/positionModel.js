const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
  // organizationID: Number,
  title: String,
  description: String,
});

module.exports = mongoose.model('Position', positionSchema);