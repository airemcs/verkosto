import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const userSchema = mongoose.Schema({
  // userID: Number,
  firstName: String,
  lastName: String,
  bio: String,
  country: String,
  city: String,
  facebook: String,
  linkedin: String,
  postIDs: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  commentIDs: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  organizationIDs: [{ type: Schema.Types.ObjectId, ref: 'Organization' }],
  positionID: { type: Schema.Types.ObjectId, ref: 'Position' },
});

const postSchema = mongoose.Schema({
  // postID: Number,
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  datePosted: Date,
  content: String,
  upvotes: Number,
  downvotes: Number,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  commentIDs: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const tagSchema = mongoose.Schema({
  // tagID: Number,
  title: String,
  description: String
});

const commentSchema = mongoose.Schema({
  // commentID: Number,
  repliedCommentID: mongoose.SchemaTypes.ObjectId,
  dateCommented: Date,
  content: String,
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  postID: { type: Schema.Types.ObjectId, ref: 'Post' },
});

const organizationSchema = mongoose.Schema({
  // organizationID: Number,
  title: String,
  description: String,
});

const positionSchema = mongoose.Schema({
  // organizationID: Number,
  description: String,
});

export const User = mongoose.model('User', userSchema);
export const Post = mongoose.model('Post', postSchema);
export const Tag = mongoose.model('Tag', tagSchema);
export const Comment = mongoose.model('Comment', commentSchema);
export const Organization = mongoose.model('Organization', organizationSchema);
export const Position = mongoose.model('Position', positionSchema);