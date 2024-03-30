const express = require('express');

// controller functions
const { createComment, getAllComments, getComment, updateComment } = require('../controllers/commentController');

const router = express.Router();

// CRUD Operations: Comment
router.post('/', createComment);

router.get('/', getAllComments);

router.get('/:id', getComment);

router.put('/:id', updateComment);

module.exports = router