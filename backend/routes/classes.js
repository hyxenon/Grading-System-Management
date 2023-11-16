const express = require('express')

const manageClassController = require('../controllers/class')

const router = express.Router()

// Add Subjects
router.post("/create/class", manageClassController.addClass)

// Update Subject
router.put('/update/:id', manageClassController.updateClass)

// Delete One Subject
router.delete('/delete/:id', manageClassController.deleteClass)

// Get all subjects
router.get("", manageClassController.getClasses)

// Get one subject
router.get('/:id', manageClassController.getClass)

module.exports = router