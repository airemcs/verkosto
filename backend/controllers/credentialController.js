const Credential = require('../models/credentialModel');

const mongoose = require('mongoose');
// CRUD Operations: Credential
const createCredential = async (req, res) => {
  try {

    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.userID) {
      return res.status(400).send({ message: "There are missing required fields." });
    }

    const newCredential = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      userID: req.body.userID
    };

    const credential = await Credential.create(newCredential);
    return res.status(201).send(credential);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getAllCredentials = async (req, res) => {
  try {
    const credentials = await Credential.find({});
    return res.status(200).json({
      count: credentials.length,
      data: credentials
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getCredential = async (req, res) => {
  try {
    const { email } = req.params;
    const credential = await Credential.findOne({ email: email });
    if (!credential) {
      return res.status(404).json({ message: 'Credential not found' });
    }
    return res.status(200).json(credential);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createCredential, getAllCredentials, getCredential };