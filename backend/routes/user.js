const express = require('express')

// controller functions
const { createUser, getAllUsers, getUserById, getUserByEmail, updateUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

// User routes
router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/email/:email', getUserByEmail);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router



