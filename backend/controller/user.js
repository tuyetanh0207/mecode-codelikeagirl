const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken');
const User = require('../models/user')
exports.createUser= async (req, res) =>{
    const {fullname, email, password} = req.body
    const isNewUser = await User.isThisEmailInUse(email)
    if (!isNewUser){
        return res.json({
            success: false,
            message: 'This email is already in use, try sign - in,'
        })
    }
    user= await User({
        fullname: fullname,
        email: email, 
        password:password
    })
    await user.save()
    res.json(user)
}

exports.userSignIn= async (req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) return res.json ({success: false, message: 'User not found, with the given email!'})
    const isMathch = await user.comparePassword(password);
    if(!isMathch){
        return res.json({success: false, message: 'email/password does not match!'})
    }
    const token = jwt.sign({
        userId: user._id}, 
        process.env.JWT_SECRET,
        {expiresIn: '1d'})
    return res.json({success: true, user, token})

}