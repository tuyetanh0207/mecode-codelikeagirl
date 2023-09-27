const mongoose = require('mongoose')
const User = require('./user.js')
const campaignSchema = new mongoose.Schema({
    nameCampaign: {type: String, require:true},
    startDate: {type: Date, require:true},
    endDate: {type: Date, require:true},
    leaderboard: 
    [
        {
            userId: String,
            nameUser: String,
            score: Number,  
        }
    ]
})


module.exports = mongoose.model('campaign', campaignSchema)