const { ObjectId } = require("mongodb")
const mongoose = require('mongoose')


const ClssSchema = new mongoose.Schema({
    name: String,
    department: { type: String },
    grade: { type: String },
    teacher: ObjectId
  })

module.exports = mongoose.model('Clss', ClssSchema)