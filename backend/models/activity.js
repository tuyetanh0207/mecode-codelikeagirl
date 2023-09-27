const mongoose = require('mongoose')
const Task = require('./task.js')
const activitySchema = new mongoose.Schema({
    idCampaign: String,
    nameCampaign: String,
    nameTask: String,
    taskId: String,
    hint: String,
    isContraint: Boolean,
    addresses: String,
    shortAddr: String,
    latitude: Number,
    longitude: Number, 
    luckywheelID: String
})

module.exports = mongoose.model('Activity', activitySchema)