const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskname: String,
    description: String,
    place: String,
    latitude:{type:Number, require:true },
    longitude: {type:Number, require:true },
})

module.exports = mongoose.model('task', taskSchema,'task')