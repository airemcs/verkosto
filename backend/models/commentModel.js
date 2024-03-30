const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const commentSchema = mongoose.Schema({
  // commentID: Number,
  repliedCommentID: mongoose.SchemaTypes.ObjectId,
  dateCommented: Date,
  content: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  postID: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
});

module.exports = mongoose.model('Comment', commentSchema);

