const express = require('express')


const teacherController = require('../controllers/teacher')
const studentController = require('../controllers/student')

const router = express.Router()


router.get('/students', studentController.getStudents) // Get All Students Data


router.get('/teachers', teacherController.getTeachers) // Get All Teachers Data


router.post('/create-user/teacher', teacherController.addTeacher) // Add Teacher

router.post('/create-user/student', studentController.addStudent) // Add Student


router.get('/teacher/:id', teacherController.getTeacher) // Get 1 Teacher Data


router.get('/student/:id', studentController.getStudent) // Get 1 Student Data


router.put('/teacher/:id', teacherController.updateTeacher) // Update Teacher


router.put('/student/:id', studentController.updateStudent) // Update Student


router.delete('/teacher/:id', teacherController.deleteTeacher) // Delete Teacher


router.delete('/student/:id', studentController.deleteStudent) // Delete Student


module.exports = router