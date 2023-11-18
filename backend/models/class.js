const mongoose = require('mongoose')


const subjectSchema = mongoose.Schema({
    subjectCode: {type: String, required: true},
    subjectDescription: {type: String, required: true},
    strand: {type: String, required: true},
    teacher: {type: String, required: true},
    students: [{type: String}]

})



module.exports = mongoose.model('Class', subjectSchema)