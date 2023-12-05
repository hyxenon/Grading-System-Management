const mongoose = require('mongoose')

const criteriaSchema = mongoose.Schema({
    criteriaName: { type: String, required: true},
    criteriaDescription: { type: String, required: true},
    type: { type: String, required: true},
    deadline: { type: String, required: true}
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