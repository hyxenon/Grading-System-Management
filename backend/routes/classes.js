const express = require('express')

const manageClassController = require('../controllers/class')

const router = express.Router()

// Add Classes
router.post("/create/class", manageClassController.addClass)

// Add Student in Class
router.post('/add/student', manageClassController.addStudentClass)

// Remove One Student in Class
router.post('/delete/student', manageClassController.deleteStudentClass)

// Add Criteria in Class
router.post('/add/criteria', manageClassController.addCriteriaClass)

// Add CriteriaType in Class
router.post('/add/criteriaType', manageClassController.addCriteriaType)

// Edit Class Publish
router.post('/edit/publish', manageClassController.editPublish)

// Delete Criteria in Class
router.post('/delete/criteria', manageClassController.deleteCriteriaClass)

// Update Class
router.put('/update/:id', manageClassController.updateClass)

// Delete One Class
router.delete('/delete/:id', manageClassController.deleteClass)

// Get all Classes by Teacher
router.post('/classes/teacher', manageClassController.getClassesByTeacher)

// Get all Classes by Student
router.post('/get/studentClass', manageClassController.getClassByStudent)

// Get All students in Class
router.post('/get/students', manageClassController.getStudentClass)

// Get All Criteria in Class
router.post('/get/criteria', manageClassController.getCriteriaClass)

// Get One Criteria in Class
router.post('/getOne/criteria', manageClassController.getOneCriteria)

// Get Criteria Types in Class
router.post('/get/criteriaTypes', manageClassController.getCriteriaTypes)

// Get Score of Student in Criteria
router.post('/get/studentScore', manageClassController.getCriteriaScoreOfStudent)

// Delte Criteria Type in Class
router.post('/delete/criteriaType', manageClassController.deleteSepecificCriteriaType)

// Edit Criteria scores
router.post('/edit/scores', manageClassController.editStudentScores)

// Get one class using Post
router.post('/get/class', manageClassController.getClassPost)

// Get all Classes
router.get("", manageClassController.getClasses)

// Get one Class
router.get('/:id', manageClassController.getClass)



module.exports = router