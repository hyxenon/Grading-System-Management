const Teacher = require('../models/teacher')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


// Get All Teachers Data
exports.getTeachers = (req, res,next ) => {
    Teacher.find()
      .then(users => {
        res.status(200).json({
          message: "Post fetched successfully!",
          posts: users
        })
      })
}

// Get Teacher
exports.getTeacher = (req, res, next) => {
    Teacher.findById(req.params.id)
        .then(user => {
            if(user){
                res.status(200).json(user)
            } else {
                res.status(404).json({message: 'User not found!'})
            }
        })
        .catch()
  }



// Add Teacher
exports.addTeacher = (req, res, next) => {
    const { email, password, firstName, lastName, position, gender, status, department, classes } = req.body;
    let hashedPassword

    bcrypt.hash(password, 10, (err, hash) => {
      if(err){
        console.log("Error hashing password: ", err);
      } else {
        hashedPassword = hash
        Teacher.create({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          position,
          gender,
          status,
          department,
          classes,
        })
          .then((teacher) => {
            res.status(201).json({
              message: 'Teacher added successfully',
              teacherId: teacher._id
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: 'Failed to add teacher',
              error: error.message,
            });
          });
      }
    })
  };

//   Update Teacher
exports.updateTeacher = async (req, res,next) => {
    const userId = new mongoose.Types.ObjectId(req.params.id);
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        console.log('Error hashing password:', err);
      } else {
        
        const updatedUser = {
          email: req.body.email,
          password: hash,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          position: req.body.position,
          status: req.body.status,
          department: req.body.department,
          gender: req.body.gender
        };
      
        try {
          await Teacher.updateOne({ _id: userId }, updatedUser);
          res.status(200).json({ message: 'Update successful!' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Update failed!' });
        }
        
      }
    });

    
     
  }


// Delete Teacher
exports.deleteTeacher = async (req, res, next) => {
    const id = req.params.id
    try {
      await Teacher.deleteOne({_id: id})
      res.status(200).json({ message: 'Delete successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Delete failed!' });
    }
    
  }

