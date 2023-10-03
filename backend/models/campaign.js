const mongoose = require('mongoose')
const User = require('./user.js')
const campaignSchema = new mongoose.Schema({
    nameCampaign: {type: String, require:true},
    startDate: {type: Date, require:true},
    endDate: {type: Date, require:true},
    leaderboard: 
    [
        {
            userID: String,
            nameUser: String,
            score: Number,  
            avatar: String
        }
    ]
})


module.exports = mongoose.model('campaign', campaignSchema)