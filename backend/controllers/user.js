const User = require('../models/user')

// email: { type: String, required: true, unique: true},
// password: {type: String, required: true},
// fullName: { type: String, required: true},
// position: { type: String, required: true},
// status: {type: String, required: true}



exports.getUsers = (req, res,next ) => {
  User.find()
    .then(users => {
      res.status(200).json({
        message: "Post fetched successfully!",
        posts: users
      })
    })
}

exports.postUser = (req, res, next) => {
      const user = new User({
        email: 'teachertest123@gmail.com',
        password: '1234',
        fullName: 'admin test',
        position: 'teacher',
        status: 'active'
      })
      user.save()
      .then(result => {
        res.status(201).json({
          message: 'Post added successfully',
          postId: result._id
          
      })
      })
  };