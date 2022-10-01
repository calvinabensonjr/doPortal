const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const generalController = require('../controllers/general')
const { ensureAuth, ensureGuest } = require('../middleware/auth')





// Template route


router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

// Template page paths

router.get('/about', generalController.getAbout)
router.get('/contact', generalController.getContact)
router.get('/Post', generalController.getPost)

module.exports = router




