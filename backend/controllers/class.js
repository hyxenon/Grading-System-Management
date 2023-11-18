const Class = require('../models/class')


exports.addClass = async (req, res, next) => {
    const { subjectCode, subjectDescription, strand, teacher } = req.body;
    try {
      const _class = await Class.create({
        subjectCode,
        subjectDescription,
        strand,
        teacher,
        students: []
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
    const { subjectCode, subjectDescription, strand, teacher, students } = req.body;
  
    try {
      const _class = await Class.findByIdAndUpdate(
        classId,
        { subjectCode, subjectDescription, strand,  teacher, students},
        { new: true } // Returns the modified document
      );
  
      if (!_class) {
        return res.status(404).json({
          message: 'Class not found',
        });
      }
  
      res.status(200).json({
        message: 'Class updated successfully',
        class: _class,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to update Class',
        error: error.message,
      });
    }
  };


  exports.getClasses = async (req, res, next) => {
    try {
        const _class = await Class.find();
        res.status(200).json({
            message: 'Classes retrieved successfully',
            class: _class,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to retrieve Classes',
            error: error.message,
        });
    }
}


exports.getClass = async (req, res, next) => {
  const classId = req.params.id;
  
  try {
    const _class = await Class.findById(classId);

    if (!_class) {
      return res.status(404).json({
        message: 'Class not found',
      });
    }

    res.status(200).json({
      message: 'Class retrieved successfully',
      class: _class,
    });
  } catch (error) {
    console.log("Class not found");
  }
};


exports.deleteClass = async (req, res, next) => {
  const id = req.params.id
  try {
    await Class.deleteOne({_id: id})
    res.status(200).json({ message: 'Delete successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Delete failed!' });
  }
};