const Tag = require('../models/tagModel');

const mongoose = require('mongoose');
// CRUD Operations: Topics
const createTopic = async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newTag = {
      title: req.body.title,
      description: req.body.description
    };

    const tag = await Tag.create(newTag);
    return res.status(201).send(tag);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getAllTopics = async (req, res) => {
  try {
    const tags = await Tag.find({});
    return res.status(200).json({
      count: tags.length,
      data: tags
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findById(id);
    return res.status(200).json(tag);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const updateTopic = async (req, res) => {
  try {

    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const { id } = req.params;
    const result = await Tag.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const deleteTopic = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Tag.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = { createTopic, getAllTopics, getTopic, updateTopic, deleteTopic };