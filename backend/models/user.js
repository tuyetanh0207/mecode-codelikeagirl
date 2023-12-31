const mongoose = require('mongoose')

const bcrypt = require ('bcrypt')

const userSchema = new mongoose.Schema({
    //_id: { type: String },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: String,
    noti:
    [
        {
            notiDate: Date,
            activityID: String,
            content: String,
            distance: Number
        }
    ],
    greenStep: 
    [
        {
            year: Number,
            greenPoint:
            [
                [Number],
            ],
        }
    ],
    campaignPoint:
    [
        {
            campaignID: String,
            joinedCities: [String], //save luckywheelID
            votingPoint: Number,
            votedPoint: Number,
            postPoint: Number


        }
    ]

})


userSchema.pre('save', function(next){
    if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash)=>{
            if(err) return next(err);

            this.password=hash;
            next();
        })
    }
})

//user.comparePassword()
userSchema.methods.comparePassword = async function (password) {
    if(!password) throw new Error ('Password is mission, can not compare!')
    try {
    const result=     await bcrypt.compare(password, this.password)
    return result;
    }

    catch (err){
        console.log('Error while comparing password!', error.message)
    }
}
userSchema.statics.isThisEmailInUse = async function (email){
    if(!email) throw new Error('invalid email.')
    try {
        const user = await this.findOne({email})
        if(user) return false
        return true
    } catch(error){
        console.log("error inside isThisEmailInUse methods", error.message)
        return false
    }
    
}

module.exports = mongoose.model('User', userSchema)