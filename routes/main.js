const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const adminController = require('../controllers/admin') 
const generalController = require('../controllers/general')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

var multer = require('multer');

//in charge if handling file uploads, often are images
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });






// Template route
router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)

//user creation and image upload
router.post('/signup', upload.single('image'),authController.postSignup)



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


//Class paths
router.post('/addClasses', generalController.addClasses)




module.exports = router




