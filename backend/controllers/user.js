const User = require('../models/user')


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
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    status: req.body.status
  })
  user.save()
  .then(result => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: result._id
  })
  })
};


