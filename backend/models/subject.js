const mongoose = require('mongoose')


const subjectSchema = mongoose.Schema({
    subjectCode: {type: String, required: true},
    subjectDescription: {type: String, required: true},
    strand: {type: String, required: true},
    year: {type: String, required: true}
})



module.exports = mongoose.model('Subject', subjectSchema)