const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: String,
    hint: String,
})

module.exports = mongoose.model('Task', taskSchema)