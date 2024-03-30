const Community = require('../models/communityModel')

const mongoose = require('mongoose');
// CRUD Operations: Communities
const createCommunity = async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newCommunity = {
      title: req.body.title,
      description: req.body.description
    };

    const community = await Community.create(newCommunity);
    return res.status(201).send(community);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getAllCommunities =  async (req, res) => {
  try {
    const community = await Community.find({});
    return res.status(200).json({
      count: community.length,
      data: community
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const community = await Community.findById(id);
    return res.status(200).json(community);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const updateCommunity = async (req, res) => {
  try {

    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const { id } = req.params;
    const result = await Community.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const deleteCommunity = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Community.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = { createCommunity, getAllCommunities, getCommunity, updateCommunity, deleteCommunity }