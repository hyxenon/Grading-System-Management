const express = require('express')

const userController = require('../controllers/user')
const teacherController = require('../controllers/teacher')
const router = express.Router()

// Get All Students Data
router.get('/students', userController.getStudents)

// Get All Teachers Data
router.get('/teachers', teacherController.getTeachers)

// Add Teacher
router.post('/create-user/teacher', teacherController.addTeacher)

// Get 1 Teacher Data
router.get('/teacher/:id', teacherController.getTeacher)

// Update Teacher
router.put('/teacher/:id', teacherController.updateTeacher)

// Delete Teacher
router.delete('/teacher/:id', teacherController.deleteTeacher)


module.exports = router