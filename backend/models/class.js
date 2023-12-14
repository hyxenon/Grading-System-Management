const mongoose = require('mongoose');



const scoreSchema = mongoose.Schema({
    studentId: { type: String, required: true },
    score: { type: Number, required: true },
});

const criteriaSchema = mongoose.Schema({
    criteriaName: { type: String, required: true },
    criteriaDescription: { type: String, required: true },
    type: { type: String, required: true },
    isPublish: {type: Boolean, required: true},
    deadline: { type: String, required: true },
    scores: [scoreSchema],  // Add scores field for grading
});

const classSchema = mongoose.Schema({
    subjectCode: { type: String, required: true },
    subjectDescription: { type: String, required: true },
    strand: { type: String, required: true },
    teacherId: { type: String, required: true },
    year: { type: String, required: true },
    students: [{ type: String }],
    criteria: [criteriaSchema],
    criteriaType: [{
        type: { type: String, required: true },
        percentage: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Class', classSchema);