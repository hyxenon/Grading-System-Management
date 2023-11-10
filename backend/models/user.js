const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    position: { type: String, required: true},
    status: {type: String, required: true}
})


module.exports = mongoose.model('User', userSchema)