const Teacher = require('../models/teacher')
const mongoose = require('mongoose')

// Get All Teachers Data
exports.getTeachers = (req, res,next ) => {
    Teacher.find({ position: "Teacher"})
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
    const { email, password, firstName, lastName, position, status, department, classes } = req.body;
  
    Teacher.create({
      email,
      password,
      firstName,
      lastName,
      position,
      status,
      department,
      classes,
    })
      .then((teacher) => {
        res.status(201).json({
          message: 'Teacher added successfully',
          teacher: teacher,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: 'Failed to add teacher',
          error: error.message,
        });
      });
  };

//   Update Teacher
exports.updateTeacher = async (req, res,next) => {
    const userId = new mongoose.Types.ObjectId(req.params.id);
    const updatedUser = {
      email: req.body.email,
      password: req.body.password,
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

