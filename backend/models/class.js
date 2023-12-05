const mongoose = require('mongoose')

const criteriaSchema = mongoose.Schema({
    criteria: { type: String, required: true},
    title: { type: String, required: true},
    dueDate: { type: Date}
})

const classSchema = mongoose.Schema({
    subjectCode: {type: String, required: true},
    subjectDescription: {type: String, required: true},
    strand: {type: String, required: true},
    teacherId: {type: String, required: true},
    year: {type: String, required: true},
    students: [{type: String}],
    criteria: [criteriaSchema]
})



module.exports = mongoose.model('Class', classSchema)