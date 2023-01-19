const User = require('../models/User')
const mongoose = require('mongoose');

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
            try{
                res.render('studentprofile.ejs', {user: req.user})
            }catch(err){
                console.log(err)
            }

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
            
            res.render('showoneuser.ejs', {showuser:user})
          
            console.log(req.query.id)
        }catch(err){
            console.log(err)
        }
    },
}