const Student = require('../models/student')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Get All Teachers Data
exports.getStudents = (req, res,next ) => {
    Student.find()
      .then(users => {
        res.status(200).json({
          message: "Post fetched successfully!",
          posts: users
        })
      })
}

// Get Student
exports.getStudent = (req, res, next) => {
    Student.findById(req.params.id)
        .then(user => {
            if(user){
                res.status(200).json(user)
            } else {
                res.status(404).json({message: 'User not found!'})
            }
        })
        .catch()
  }



// Add Student
exports.addStudent = (req, res, next) => {
    const { email, password, firstName, lastName, position, gender, status, strand, classes } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log('Error hashing password:', err);
      } else {
        Student.create({
          email,
          password: hash,
          firstName,
          lastName,
          position,
          gender,
          status,
          strand,
          classes,
        })
          .then((student) => {
            res.status(201).json({
              message: 'Student added successfully',
              studentId: student._id
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: 'Failed to add Student',
              error: error.message,
            });
          });
      }
    });
  };

//   Update Teacher
exports.updateStudent = async (req, res,next) => {
    const userId = new mongoose.Types.ObjectId(req.params.id);

    bcrypt.hash(req.body.password, 10, async(err, hash) => {
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
          strand: req.body.strand,
          gender: req.body.gender
        };
      
        try {
          await Student.updateOne({ _id: userId }, updatedUser);
          res.status(200).json({ message: 'Update successful!' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Update failed!' });
        }
      
      }
    });
  }


// Delete Teacher
exports.deleteStudent = async (req, res, next) => {
    const id = req.params.id
    try {
      await Student.deleteOne({_id: id})
      res.status(200).json({ message: 'Delete successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Delete failed!' });
    }
    
  }

