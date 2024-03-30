const Comment = require('../models/commentModel');
const mongoose = require('mongoose');

// CRUD Operations: Comment
const createComment = async (req, res) => {
  try {

    if (!req.body.content || !req.body.userID || !req.body.postID) {
      return res.status(400).send({ message: "Missing required fields: content, userID, postID" });
    }

    const newComment = {
      repliedCommentID: req.body.repliedCommentID,
      dateCommented: req.body.dateCommented || new Date(),
      content: req.body.content,
      userID: req.body.userID,
      postID: req.body.postID
    };

    const comment = await Comment.create(newComment);
    await Post.findByIdAndUpdate(req.body.postID, { $push: { commentIDs: comment._id } });
    await User.findByIdAndUpdate(req.body.userID, { $push: { commentIDs: comment._id } });

    return res.status(201).send(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    return res.status(200).json({
      count: comments.length,
      data: comments
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const updateComment = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Comment.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = { createComment, getAllComments, getComment, updateComment };