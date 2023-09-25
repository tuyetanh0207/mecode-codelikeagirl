const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const sharp = require("sharp");
const cloudinary = require("../helper/imageUpload");
exports.createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser) {
    return res.json({
      success: false,
      message: "This email is already in use, try sign - in,",
    });
  }
  user = await User({
    fullname: fullname,
    email: email,
    password: password,
  });
  await user.save();
  res.json(user);
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.json({
      success: false,
      message: "User not found, with the given email!",
    });
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.json({
      success: false,
      message: "email/password does not match!",
    });
  }
  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET,
    { 
      //expiresIn: "1d"
   }
  );
  return res.json({
    success: true,
    userInfo: {
      email: user.email,
      fullname: user.fullname,
      avatar: user.avatar ? user.avatar : "",
      userId: user._id,
    },
    token,
  });
};
exports.uploadProfile = async (req, res) => {
  const { user } = req;
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `{user._id}_profile`,
      width: 500,
      height: 500,
      crop: "fill",
    });
    console.log(result);
    // resize(Math.round(width*0.5), Math.round(height*0.5))
    // .toBuffer()
    // console.log(avatar)
    await User.findByIdAndUpdate(user._id, { avatar: result.url });
    res.status(201).json({ success: true, message: "Your profile is updated" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error, try after sometime" });
    console.log("Error while uploading profile image", error.message);
  }
};

exports.getNoti = async (req, res) => {
  try {
    // var userID = user.userID;
    var userID = "651159001f1dc1a4a78665d7";
    const user = await User.findOne({_id: userID});
    const noties = user.noti;
    res.json(noties);
  } catch (error) {
    console.log(error.message);
  }
};
