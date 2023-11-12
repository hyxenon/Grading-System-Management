const mongoose = require('mongoose')


const subjectSchema = mongoose.Schema({
    subjectCode: {type: String, required: true},
    classDescription: {type: String, required: true},
    teacherEmail: {type: String, required: true}

})



module.exports = mongoose.model('Subject', subjectSchema)