const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: true,
    },
    taskId: {
        type: String,
        required: true,
    },
    campaignId: {
        type: String,
        required: true,

    },
    caption: {
        type: String,
        //required: true,
    },
    photos: {
        type: [String],
        //required: true,

    },
    address: String,
    votedPoint: Number,
    createdDate: String

})
module.exports = mongoose.model('Post', postSchema)