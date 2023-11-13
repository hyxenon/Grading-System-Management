const User = require('../models/user')

// Get All Student Data
exports.getStudents = (req, res,next ) => {
  User.find({ position: "Student"})
    .then(users => {
      res.status(200).json({
        message: "Post fetched successfully!",
        posts: users
      })
    })
}

