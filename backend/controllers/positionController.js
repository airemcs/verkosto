const Position = require('../models/positionModel')

const mongoose = require('mongoose');
// CRUD Operations: Population
const createPosition = async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newPosition = {
      title: req.body.title,
      description: req.body.description
    };

    const position = await Position.create(newPosition);
    return res.status(201).send(position);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find({});
    return res.status(200).json({
      count: positions.length,
      data: positions
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

const getPosition = async (req, res) => {
  try {
    const { id } = req.params;
    const position = await Position.findById(id);
    return res.status(200).json(position);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

module.exports = { createPosition, getAllPositions, getPosition }