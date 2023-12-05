const express = require('express')

const manageClassController = require('../controllers/class')

const router = express.Router()

// Add Classes
router.post("/create/class", manageClassController.addClass)

// Add Student in Class
router.post('/add/student', manageClassController.addStudentClass)

// Update Class
router.put('/update/:id', manageClassController.updateClass)

// Delete One Class
router.delete('/delete/:id', manageClassController.deleteClass)

// Get all Classes by Teacher
router.post('/classes/teacher', manageClassController.getClassesByTeacher)

// Get All students in Class

router.post('/get/students', manageClassController.getStudentClass)

// Get one class using Post
router.post('/get/class', manageClassController.getClassPost)

// Get all Classes
router.get("", manageClassController.getClasses)

// Get one Class
router.get('/:id', manageClassController.getClass)



module.exports = router