const mongoose = require('mongoose')

const criteriaSchema = mongoose.Schema({
    criteriaNames: [{ type: String, required: true}]
})


module.exports = mongoose.model('Criteria', criteriaSchema)