const Admin = require('../models/admin')
const Student = require('../models/student')
const Teacher = require('../models/teacher')
const bcrypt = require('bcrypt');

// Get All Student Data
exports.getUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check in Admin model
    const adminUser = await Admin.findOne({ email });
    if (adminUser && await bcrypt.compare(password, adminUser.password)) {
      return res.json({ userType: 'admin', user: adminUser });
    }

    // Check in Teacher model
    const teacherUser = await Teacher.findOne({ email });
    if (teacherUser && await bcrypt.compare(password, teacherUser.password)) {
      return res.json({ userType: 'teacher', user: teacherUser });
    }

    // Check in Student model
    const studentUser = await Student.findOne({ email });
    if (studentUser && await bcrypt.compare(password, studentUser.password)) {
      return res.json({ userType: 'student', user: studentUser });
    }

    // If no user is found, return an error
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Error while checking login data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};





