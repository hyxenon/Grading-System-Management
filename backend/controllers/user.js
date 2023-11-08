const User = require('../models/user')
const mongoose = require('mongoose')

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
      userId: result._id
  })
  })
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
      .then(user => {
          if(user){
              res.status(200).json(user)
          } else {
              res.status(404).json({message: 'User not found!'})
          }
      })
      .catch()
}

// const userSchema = mongoose.Schema({
//   email: { type: String, required: true, unique: true},
//   password: {type: String, required: true},
//   firstName: { type: String, required: true},
//   lastName: { type: String, required: true},
//   position: { type: String, required: true},
//   status: {type: String, required: true}
// })


exports.updateUser = async (req, res,next) => {
  const userId = new mongoose.Types.ObjectId(req.params.id);
  const updatedUser = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    status: req.body.status,
    gender: req.body.gender
  };

  try {
    await User.updateOne({ _id: userId }, updatedUser);
    res.status(200).json({ message: 'Update successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Update failed!' });
  }
   
}
