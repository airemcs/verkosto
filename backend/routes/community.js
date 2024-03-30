const express = require('express');

// controller functions
const { createCommunity, getAllCommunities, getCommunity, updateCommunity, deleteCommunity, } = require('../controllers/communityController');

const router = express.Router();

router.post('/', createCommunity);

router.get('/', getAllCommunities);

router.get('/:id', getCommunity);

router.put('/:id', updateCommunity);

router.delete('/:id', deleteCommunity);

module.exports = router