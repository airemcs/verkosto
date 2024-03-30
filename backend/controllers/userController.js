const User = require('../models/userModel');

const mongoose = require('mongoose');
const createUser = async (req, res) => {
  try {

    if (!req.body.firstName || !req.body.lastName) {
      return res.status(400).send({ message: "There are missing required fields: firstName, lastName." });
    }

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      country: req.body.country,
      city: req.body.city,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin,
      postIDs: req.body.postIDs || [],
      commentIDs: req.body.commentIDs || [],
      organizationIDs: req.body.organizationIDs || null,
      positionID: req.body.positionID || null,
    };

    const user = await User.create(newUser);
    return res.status(201).send(user);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const requiredFields = ['firstName', 'lastName'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).send({ message: `${field} is required` });
      }
    }

    const result = await User.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The user is not found.' });
    }

    return res.status(200).send({ message: 'The user has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {

    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}


module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };