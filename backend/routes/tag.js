const express = require('express')

// controller functions
const { createTopic, getAllTopics, getTopic, updateTopic, deleteTopic } = require('../controllers/tagController')

const router = express.Router();

// CRUD Operations: Topics
router.post('/', createTopic);

router.get('/', getAllTopics);

router.get('/:id', getTopic);

router.put('/:id', updateTopic);

router.delete('/:id', deleteTopic);

module.exports = router