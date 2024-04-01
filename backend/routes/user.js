const express = require('express')

// controller functions
const { signupUser, loginUser, editUser, createUser, getAllUsers, getUserById, getUserByEmail, updateUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

// User routes
router.post('/signup', signupUser);

router.post('/login', loginUser);

router.put('/edit', editUser);

router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/email/:email', getUserByEmail);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router



