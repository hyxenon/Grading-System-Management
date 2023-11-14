const express = require('express')

const subjectController = require('../controllers/subject')

const router = express.Router()

// Add Subjects
router.post("/create/subject", subjectController.addSubject)

// Update Subject
router.put('/update/:id', subjectController.updateSubject)

// Delete One Subject
router.delete('/delete/:id', subjectController.deleteSubject)

// Get all subjects
router.get("", subjectController.getSubjects)

// Get one subject
router.get('/:id', subjectController.getSubject)






module.exports = router