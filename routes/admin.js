const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin') 
const { ensureAuth } = require('../middleware/auth')

router.get('/admin', ensureAuth, adminController.admin)

// router.post('/createNewsItem', adminController.createNewsItem)


module.exports = router

//see generalController
//issue fixed by adding admin path into generalController
//then by adding 'router.get' for admin in main.js