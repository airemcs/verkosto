const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const postSchema = mongoose.Schema({
  // postID: Number,
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: {type: String, required: true},
  datePosted: Date,
  content: {type: String, required: true},
  upvotes: Number,
  downvotes: Number,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  commentIDs: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Post', postSchema);