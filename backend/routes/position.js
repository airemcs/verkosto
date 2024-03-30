const express = require('express');

// controller functions
const { createPosition, getAllPositions, getPosition } = require('../controllers/positionController');

const router = express.Router();

// CRUD Operations: Population
router.post('/', createPosition);

router.get('/', getAllPositions);

router.get('/:id', getPosition);

module.exports = router;