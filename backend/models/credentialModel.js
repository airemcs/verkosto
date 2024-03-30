const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// TO BE MERGED 
const credentialSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Credential', credentialSchema);