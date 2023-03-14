const User = require('../models/User')
const Clss = require('../models/Clss')
const mongoose = require('mongoose');


async function getClass(objectId){
    const clss = await Clss.findOne({_id:objectId})
    const teacherId = clss.teacher
    // teacher; same as teacher: teacher
    const teacherObject = await User.findOne({_id:teacherId})
    // console.log('found clss ID', objectId, 'and found teacher ID' , teacherId)

    // clss.teacherName = 'testTeacherName'
    // clss.teacherName = teacherObject.userName
    clss.teacherName = teacherObject.name.first + ' ' + teacherObject.name.last

    //create more names objects, and in the login form (so I no longer have to manually put them in there)
    // paste list of classes for each student on the opposite side. With checkboxes

    console.log("found" , teacherObject, clss)
    
    
    return clss
}

async function getClasses(objectIdArray){
     const classArray = []
    for(let i = 0; i < objectIdArray.length; i++){
        const classA = await getClass(objectIdArray[i])
        classArray.push(classA)
    }
    return classArray
}






// console.log('class function', getClass(mongoose.Types.ObjectId('63d03bedbf91091227b92eac')))

module.exports = {
    getAbout: (req, res) => {
        res.render('about.ejs')
    },
    getContact: (req, res) => {
        res.render('contact.ejs')
    },
    getPost: (req, res) => {
        res.render('post.ejs')
    },


    //code that figures out whether you're an admin or not
    getAdmin: async (req, res) => {
        if(req.user.userType !== 'admin' ){
            res.redirect('/')
        }else{
            try{
                const allUsers = await User.find()
                res.render('admin.ejs', {allUsers: allUsers ,user: req.user})
            }catch(err){
                console.log(err)
            }

            // res.render('admin.ejs')
        }
    },
    getStudentProfile: async (req, res) => {
        if(req.user.userType !== 'student' ){
            res.redirect('/')
        }else{
            
            
            const clss = await getClasses(req.user.classes)
            console.log('found class', clss, 'using', req.user.classes[0])
            res.render('studentprofile.ejs', {user:req.user, clss})
        }
    },
    getTeacherProfile: async (req, res) => {
        if(req.user.userType !== 'teacher' ){
            res.redirect('/')
        }else{
            try{
                res.render('teacherprofile.ejs', {user: req.user})
            }catch(err){
                console.log(err)
            }

        }
    },
    getTutorProfile: async (req, res) => {
        if(req.user.userType !== 'tutor' ){
            res.redirect('/')
        }else{
            try{
                res.render('tutorprofile.ejs', {user: req.user})
            }catch(err){
                console.log(err)
            }

        }
    },

    getShowOneUser: async (req,res)=>{
    
        console.log('url Id',req.query.id)
        try{

            //converting the string into an objectid. Example: if you went to canada and you tried to give them a us dollar
            const user = await User.findOne({_id: mongoose.Types.ObjectId(req.query.id)})
            console.log('found user', user)
            
            const clss = await getClasses(user.classes)
            console.log('found class', clss, 'using', user.classes[0])
            res.render('showoneuser.ejs', {showuser:user, clss})
          
            console.log(req.query.id)
        }catch(err){
            console.log(err)
        }
    },

    addClasses: async (req,res) =>{

        console.log("add ,classes", req.body) 
        // loop through all the keys in req.body and push each one, into the student
        //loop through all the classes, in req.body, push each one into the student, so that it shows up on their page
        //this is so that I can make the app do the work, rather than manually pair students with classes from MongoDB
        res.send("ok")
    }

}