const express = require('express')

// controller functions
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

// User routes
router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router



