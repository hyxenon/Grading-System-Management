const express = require('express')

const adminDataController = require('../controllers/admindata')

const router = express.Router()


router.get("/admin/data", adminDataController.getAdminData)

module.exports = router