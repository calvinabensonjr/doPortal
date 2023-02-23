const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const adminController = require('../controllers/admin') 
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


// Profile paths
router.get('/admin', generalController.getAdmin)
router.get('/showoneuser', generalController.getShowOneUser)
router.get('/studentprofile', generalController.getStudentProfile)
router.get('/teacherprofile', generalController.getTeacherProfile)
router.get('/tutorprofile', generalController.getTutorProfile)
console.log(generalController.getStudentProfile)
// router.get('/admin/todos?id=<%=user._id%>', generalController.getAdminStudent)

module.exports = router




