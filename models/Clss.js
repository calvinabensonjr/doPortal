const { ObjectId } = require("mongodb")
const mongoose = require('mongoose')


const ClssSchema = new mongoose.Schema({
    name: String,
    department: String,
    grade: String,
    teacher: ObjectId,
    teacherName: String
  })

  // attaches ClssSchema to 'Clss' collection
module.exports = mongoose.model('Clss', ClssSchema)

// makes it so i can require in 'Clss', and enabling the use of the ClssSchema