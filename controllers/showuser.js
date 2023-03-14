// const Todo = require('../models/Todo')
const User = require('../models/User')

module.exports = {
    //previously called getTodos, now called 'showUser'
    // getShowUser: async (req,res)=>{
    //     // if(req.user.userType == 'admin' ){
    //     //     res.redirect('/todos?id=user._id')
    //     // console.log(req.user)
    //     console.log('url Id',req.query.id)
    //     try{
            
    //         // const todoItems = await Todo.find({userId:req.user.id})
    //         const user = await User.find({userId:req.query.id})
    //         const allClasses = await Clss.find()
    //         console.log('found user', user)
    //         // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    //         // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    //         //previously rendered 'todos.ejs'
    //         res.render('showuser.ejs', {showuser:user, allClasses })
    //         // res.render('showuser.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    //         console.log(req.query.id)
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    
    // createTodo: async (req, res)=>{
    //     try{
            // await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            // console.log('Todo has been added!')
            // console.log('showUser has been added!')
            // res.redirect('/todos')
            // res.redirect('/showuser')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markComplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deleteTodo: async (req, res)=>{
//         console.log(req.body.todoIdFromJSFile)
//         try{
//             await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
//             console.log('Deleted Todo')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     }
}    