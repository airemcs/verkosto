const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// TO BE MERGED 

const userSchema = mongoose.Schema({
  // userID: Number,
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  bio: String,
  country: String,
  city: String,
  facebook: String,
  linkedin: String,
  postIDs: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  commentIDs: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  organizationIDs: { type: Schema.Types.ObjectId, ref: 'Organization' },
  positionID: { type: Schema.Types.ObjectId, ref: 'Position' },
});

module.exports = mongoose.model('User', userSchema);

