const express = require('express')

const manageClassController = require('../controllers/class')

const router = express.Router()

// Add Classes
router.post("/create/class", manageClassController.addClass)

// Update Class
router.put('/update/:id', manageClassController.updateClass)

// Delete One Class
router.delete('/delete/:id', manageClassController.deleteClass)

// Get all Classes by Teacher
router.post('/classes/teacher', manageClassController.getClassesByTeacher)

// Get all Classes
router.get("", manageClassController.getClasses)

// Get one Class
router.get('/:id', manageClassController.getClass)

module.exports = router