const mongoose = require('mongoose')
const luckywheelSchema = new mongoose.Schema(
    {
        campaignID: String,
        nameLuckyWheel: String,
        requireParticipant: Number,
        currentParticipant: Number,
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
)


module.exports = mongoose.model('Luckywheel', luckywheelSchema)