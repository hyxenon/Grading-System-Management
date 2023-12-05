const Class = require("../models/class");
const Student = require('../models/student');

exports.addClass = async (req, res, next) => {
  const { subjectCode, subjectDescription, strand, teacherId, year } = req.body;
  try {
    const _class = await Class.create({
      subjectCode,
      subjectDescription,
      strand,
      teacherId,
      year,
      students: [],
    });

     res.status(201).json({
        message: 'Class added successfully',
        class: _class,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to add Class',
        error: error.message,
      });
    }
};

exports.updateClass = async (req, res, next) => {

  const classId = req.params.id;
  const { subjectCode, subjectDescription, strand, teacherId, students } =
    req.body;

  try {
    const _class = await Class.findByIdAndUpdate(
      classId,
      { subjectCode, subjectDescription, strand, teacherId, students },
      { new: true } // Returns the modified document
    );

    if (!_class) {
      return res.status(404).json({
        message: "Class not found",

      });
    }

    res.status(200).json({
      message: "Class updated successfully",
      class: _class,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update Class",
      error: error.message,
    });
  }
};

exports.getClasses = async (req, res, next) => {
  try {
    const _class = await Class.find();
    res.status(200).json({
      message: "Classes retrieved successfully",
      class: _class,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve Classes",
      error: error.message,
    });
  }
};

exports.getClassesByTeacher = async (req, res, next) => {
 
  try {
  const _class = await Class.find({teacherId: req.body._id})
  res.status(200).json({
    message: "Classes retrieved successfully",
    class: _class,
  })
}  catch (error) {
  res.status(500).json({
    message: "Failed to retrieve Classes",
    error: error.message,
  });
}
};

exports.getClass = async (req, res, next) => {
  const classId = req.params.id;

  try {
    const _class = await Class.findById(classId);

    if (!_class) {
      return res.status(404).json({
        message: "Class not found",
      });
    }

    res.status(200).json({
      message: "Class retrieved successfully",
      class: _class,
    });
  } catch (error) {
    console.log("Class not found");
  }
};

exports.getClassPost = async (req, res, next) => {
  const classId = req.body.classId

  try {
    const _class = await Class.findById(classId);

    if (!_class) {
      return res.status(404).json({
        message: "Class not found",
      });
    }

    res.status(200).json({
      message: "Class retrieved successfully",
      class: _class,
    });
  } catch (error) {
    console.log("Class not found");
  }
};

exports.deleteClass = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Class.deleteOne({ _id: id });
    res.status(200).json({ message: "Delete successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Delete failed!" });
  }
};

exports.addStudentClass = async (req, res, next) => {
  const { classId, studentId } = req.body;

  try {
    // Find the class by ID
    const myClass = await Class.findById(classId);

    if (!myClass) {
      return res.status(404).json({
        message: 'Class not found',
      });
    }

    // Add the student to the students array
    myClass.students.push(studentId);

    // Save the updated class
    const updatedClass = await myClass.save();

    res.status(200).json({
      message: 'Student added to class successfully',
      updatedClass: updatedClass,
    });
  } catch (error) {
    console.error('Error adding student to class:', error);
    res.status(500).json({
      message: 'Failed to add student to class',
      error: error.message,
    });
  }
}


exports.deleteStudentClass = async (req, res, next) => {
  const { classId, studentId } = req.body;

  try {
    // Find the class by its _id (class ID)
    const foundClass = await Class.findById(classId);

    if (!foundClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Find the index of the student in the students array
    const studentIndex = foundClass.students.findIndex(student => student == studentId);

    if (studentIndex === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Remove the student from the array
    foundClass.students.splice(studentIndex, 1);

    // Save the updated class document
    await foundClass.save();

    res.status(200).json({ message: 'Student removed successfully', class: foundClass });
  } catch (error) {
    console.error('Error removing student from class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



exports.getStudentClass = async (req, res, next) => {
  const { classId } = req.body;
  try {
    const myClass = await Class.findById(classId);

    if (!myClass) {
      return res.status(404).json({
        message: 'Class not found',
      });
    }

    // Fetch students using the student IDs stored in the class
    const students = await Student.find({ _id: { $in: myClass.students } });

    res.status(200).json({
      message: 'Students in the class retrieved successfully',
      students,
    });
  } catch (error) {
    console.error('Error getting students in class:', error);
    res.status(500).json({
      message: 'Failed to get students in class',
      error: error.message,
    });
  }
}


exports.addCriteriaClass = async (req, res, next ) => {
  const { classId, criteriaName, criteriaDescription, type, deadline } = req.body;

  try {
    // Find the class by its _id (class ID)
    const foundClass = await Class.findById(classId);

    if (!foundClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Create a new criteria object
    const newCriteria = {
      criteriaName,
      criteriaDescription,
      type,
      deadline,
    };

    // Add the new criteria to the criteria array
    foundClass.criteria.push(newCriteria);

    // Save the updated class document
    await foundClass.save();

    res.status(201).json({ message: 'Criteria added successfully', class: foundClass });
  } catch (error) {
    console.error('Error adding criteria to class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.deleteCriteriaClass = async (req, res, next) => {
  const { classId, criteriaId } = req.body;

  try {
    // Find the class by its _id (class ID)
    const foundClass = await Class.findById(classId);

    if (!foundClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Find the index of the criteria in the criteria array
    const criteriaIndex = foundClass.criteria.findIndex(criteria => criteria._id == criteriaId);

    if (criteriaIndex === -1) {
      return res.status(404).json({ message: 'Criteria not found' });
    }

    // Remove the criteria from the array
    foundClass.criteria.splice(criteriaIndex, 1);

    // Save the updated class document
    await foundClass.save();

    res.status(200).json({ message: 'Criteria deleted successfully', class: foundClass });
  } catch (error) {
    console.error('Error deleting criteria for class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.getCriteriaClass = async (req, res, next) => {
  const { classId } = req.body; // Assuming you're passing classId in the request params

  try {
    // Find the class by its _id (class ID)
    const foundClass = await Class.findById(classId);

    if (!foundClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Retrieve the criteria array from the class
    const criteriaArray = foundClass.criteria;

    res.status(200).json({ criteria: criteriaArray });
  } catch (error) {
    console.error('Error getting criteria for class:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


