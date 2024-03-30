const express = require('express');

// controller functions
const { createCredential, getAllCredentials, getCredential } = require('../controllers/credentialController');

const router = express.Router();

// Credential routes -- TO BE MERGED with user-- 
router.post('/', createCredential);

router.get('/', getAllCredentials);

router.get('/:email', getCredential);

module.exports = router;

