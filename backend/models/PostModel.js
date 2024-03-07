import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag1: String,
  tag2: String,
  tag3: String,
  upvotes: Number,
  downvotes: Number,
  comments: Number,
});

export const Post = mongoose.model('Post', { postSchema });