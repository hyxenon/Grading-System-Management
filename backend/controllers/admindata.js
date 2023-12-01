const AdminData = require("../models/admindata");
const Student = require('../models/student');
const Teacher = require('../models/teacher');

async function getStudentCount() {
    try {
        const totalStudents = await Student.countDocuments();
        const totalActiveStudents = await Student.countDocuments({ status: 'Online' });

        return { totalStudents, totalActiveStudents };
    } catch (error) {
        console.error('Error getting student count:', error);
        throw error;
    }
}

async function getTeacherCount() {
    try {
        const totalTeachers = await Teacher.countDocuments();
        const totalActiveTeachers = await Teacher.countDocuments({ status: 'Online' });

        return { totalTeachers, totalActiveTeachers };
    } catch (error) {
        console.error('Error getting teacher count:', error);
        throw error;
    }
}

exports.getAdminData = async (req, res, next) => {
    try {
        const { totalStudents, totalActiveStudents } = await getStudentCount();
        const { totalTeachers, totalActiveTeachers } = await getTeacherCount();
      
        
        const adminData = await AdminData.findOne();

        if (!adminData) {
            throw new Error('Admin data not found.');
        }

        
        adminData.totalStudents = totalStudents;
        adminData.totalActiveStudents = totalActiveStudents;
        adminData.totalTeachers = totalTeachers;
        adminData.totalActiveTeachers = totalActiveTeachers;

        await adminData.save();

        
        res.status(200).json({
            message: 'Admin data updated successfully',
            adminData: adminData,
        });
    } catch (error) {
        console.error('Error updating admin data:', error);
        res.status(500).json({
            message: 'Failed to update admin data',
            error: error.message,
        });
    }
};
