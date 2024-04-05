const User = require('../models/userModel');
const Post = require('../models/postModel');

const mongoose = require('mongoose');

// CRUD Operations: Post
const createPost = async (req, res) => {
  try {

    if (!req.body.userID || !req.body.title || !req.body.content) {
      return res.status(400).send({ message: "There are missing required fields: userID, title, content." });
    }

    const user = await User.findById(req.body.userID);
    if (!user) {
      return res.status(404).send({ message: "The user not found." });
    }

    const newPost = {
      userID: req.body.userID,
      title: req.body.title,
      datePosted: req.body.datePosted || new Date(),
      content: req.body.content,
      upvotes: req.body.upvotes || 0,
      downvotes: req.body.downvotes || 0,
      tags: req.body.tags
    };

    const post = await Post.create(newPost);
    await User.findByIdAndUpdate(req.body.userID, { $push: { postIDs: post._id } });

    return res.status(201).send(post);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      count: posts.length,
      data: posts
    });
  } catch (error) {
    console.log("OML");
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const updatePost = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const deletePost = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Post.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = { createPost, getAllPosts, getPost, updatePost, deletePost }; 