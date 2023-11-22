const Subject = require('../models/subject')

exports.addSubject = async (req, res, next) => {
    const { subjectCode, subjectDescription, strand, year } = req.body;
   
    try {
      const subject = await Subject.create({
        subjectCode,
        subjectDescription,
        strand,
        year
      });
  
      res.status(201).json({
        message: 'Subject added successfully',
        subject: subject,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to add subject',
        error: error.message,
      });
    }
};

exports.updateSubject = async (req, res, next) => {
  const subjectId = req.params.id;
  const { subjectCode, subjectDescription, strand } = req.body;

  try {
    const subject = await Subject.findByIdAndUpdate(
      subjectId,
      { subjectCode, subjectDescription, strand },
      { new: true } // Returns the modified document
    );

    if (!subject) {
      return res.status(404).json({
        message: 'Subject not found',
      });
    }

    res.status(200).json({
      message: 'Subject updated successfully',
      subject: subject,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update subject',
      error: error.message,
    });
  }
};

exports.getSubjects = async (req, res, next) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({
            message: 'Subjects retrieved successfully',
            subjects: subjects,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to retrieve subjects',
            error: error.message,
        });
    }
}


exports.getSubjectsByStrand = async (req, res, next) => {
  const { strand, position} = req.body

  if(position == 'teacher'){
    const subjects = await Subject.find({strand: strand})

    if (!subjects) {
      return res.status(404).json({
        message: 'Subjects not found',
      });
    }

    res.status(200).json({
      message: 'Subjects retrieved successfully',
      subjects: subjects,
    });
  }
}

exports.getSubject = async (req, res, next) => {
  const subjectId = req.params.id;
  
  try {
    const subject = await Subject.findById(subjectId);

    if (!subject) {
      return res.status(404).json({
        message: 'Subject not found',
      });
    }

    res.status(200).json({
      message: 'Subject retrieved successfully',
      subject: subject,
    });
  } catch (error) {
    console.log("Subject not found");
  }
};

exports.deleteSubject = async (req, res, next) => {
  const id = req.params.id
  try {
    await Subject.deleteOne({_id: id})
    res.status(200).json({ message: 'Delete successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Delete failed!' });
  }
};