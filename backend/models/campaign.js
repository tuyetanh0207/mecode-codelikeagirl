const mongoose = require('mongoose')
const User = require('./user.js')
const campaignSchema = new mongoose.Schema({
    nameCampaign: {type: String, require:true},
    startDate: {type: Date, require:true},
    endDate: {type: Date, require:true},
    luckyWheel: 
    [
        {
            nameLuckyWheel: String,
            giftList:
            [
                {
                    nameGift: String,
                    quantity: Number,
                    restQuantity: Number,
                    shipment: 
                    [
                        {
                            addr: String,
                            userId: String,
                            quantity: Number,
                            date: Date,
                            status: String,
                        }
                    ]

                }
                
            ]
        }
    ],
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