const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

// Get All Teachers Data
router.get('', userController.getUsers)

// Get 1 Teacher Data
router.get('/:id', userController.getUser)
router.post('/create-user', userController.postUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router