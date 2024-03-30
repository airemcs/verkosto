const express = require('express');

// controller functions
const { createPost, getAllPosts, getPost, updatePost } = require('../controllers/postController');

const router = express.Router();

router.post('/', createPost);

router.get('/', getAllPosts);

router.get('/:id', getPost);

router.put('/:id', updatePost);

module.exports = router