const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
   // _id: { type: String },
    name: String,
    hint: String,
})

module.exports = mongoose.model('Task', taskSchema)