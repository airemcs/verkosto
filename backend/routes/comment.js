const express = require('express');

// controller functions
const { createComment, getAllComments, getComment, updateComment, deleteComment } = require('../controllers/commentController');

const router = express.Router();

// CRUD Operations: Comment
router.post('/', createComment);

router.get('/', getAllComments);

router.get('/:id', getComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

module.exports = router