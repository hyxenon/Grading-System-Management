const mongoose = require('mongoose')

const adminDashboard = mongoose.Schema({
    totalStudents: { type: Number },
    totalActiveStudents: { type: Number },
    totalTeachers: { type: Number },
    totalActiveTeachers: { type: Number },
})

module.exports = mongoose.model('adminData', adminDashboard)
