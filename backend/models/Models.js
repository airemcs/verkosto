import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = mongoose.Schema({
  // userID: Number,
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
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

const commentSchema = mongoose.Schema({
  // commentID: Number,
  repliedCommentID: mongoose.SchemaTypes.ObjectId,
  dateCommented: Date,
  content: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  postID: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
});

const tagSchema = mongoose.Schema({
  // tagID: Number,
  title: String,
  description: String
});

const organizationSchema = mongoose.Schema({
  // organizationID: Number,
  title: String,
  description: String,
});

const positionSchema = mongoose.Schema({
  // organizationID: Number,
  title: String,
  description: String,
});

export const User = mongoose.model('User', userSchema);
export const Post = mongoose.model('Post', postSchema);
export const Tag = mongoose.model('Tag', tagSchema);
export const Comment = mongoose.model('Comment', commentSchema);
export const Organization = mongoose.model('Organization', organizationSchema);
export const Position = mongoose.model('Position', positionSchema);