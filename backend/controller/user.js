const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Campaign = require("../models/campaign");
const sharp = require("sharp");
const cloudinary = require("../helper/imageUpload");

var idCampaign = "65115ac21f1dc1a4a78665db";

exports.createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser) {
    return res.json({
      success: false,
      message: "This email is already in use, try sign - in,",
    });
  }
  // tạo mảng greenStep
  const longMonth=[1,3,5,7,8,10,12]
  const avt=[
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt1_rnnxnm.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt3_xnvogd.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt2_rxxacq.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt9_k21n3j.gif',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt5_gqb0do.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt4_ft7d6i.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918115/avt7_sdehua.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918114/avt6_nroy9s.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918114/avt8_os6krt.jpg',
    'https://res.cloudinary.com/dzcxfc257/image/upload/v1695918114/avt10_kgbaf8.jpg',
    
  ]
  const randomAvtIdx= Math.floor(Math.random()*(10-1 + 1) + 1)
  let newGreenPoint=[]
  const currentDate = new Date();
  const year=currentDate.getFullYear()
  const month = currentDate.getDay()
  const day = currentDate.getDate()

  for( let i=0;i<12;i++){
    newGreenPoint[i]=[]
    console.log('idx', i)
    //thang 2 
    if(i==1 && isLeapYear(year))
    {
      for(let j =0 ;j<29; j++){
        newGreenPoint[i].push(0)
      }
      continue
    }
    if(i==1 && !isLeapYear(year))
    {
      for(let j =0 ;j<28; j++){
        newGreenPoint[i].push(0)
      }
      continue
    }
     
    if (longMonth.indexOf(i)>=-1) {
      for(let j =0 ;j<31; j++){
        newGreenPoint[i].push(0)
      }
    }else {
      for(let j =0 ;j<30; j++){
        newGreenPoint[i].push(0)
      }
    }
      
  }
  //console.log('final greenpoint', newGreenPoint)
  var user = await User({
    fullname: fullname,
    email: email,
    password: password,
    avatar: avt[randomAvtIdx],
    noti:[],
    greenStep:{
      year: year,
      greenPoint: newGreenPoint
    },
    campaignPoint: [{
      campaignID: '65115ac21f1dc1a4a78665db',
      joinedCities: [],
      votedPoint: 0,
      votingPoint: 0,
      postPoint: 0,
    }]
  });
  await User.deleteMany({ $or : [{avatar: ''}, {avatar: {$exists:false}}]});
  await user.save();

  user = await User.findOne({email: email})
  var userInLeaderboard = {
    userID: user._id,
    nameUser : user.fullname,
    score: 0
  }

  await Campaign.findByIdAndUpdate(idCampaign,{$push: {leaderboard: userInLeaderboard}})
  


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
      greenStep: user.greenStep,
      campaignPoint: user.campaignPoint[0]
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
exports.getUserInfo= async (req,res) => {
  console.log('running getUserInfo')
  const userId = req.params.id;
  const { user } = req;
  if (!user._id) {
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });
  }
  try {
   
    let user
    if (userId!==user._id) {
       user = await User.find({ userId: userId }).select('userId email avatar greenStep campaignPoint').exec();
    } else 
    {
      user =await User.find({ userId: userId }).select('userId email avatar greenStep campaignPoint').exec();
   }
   console.log('user',user)
    res.status(201).json({success: true, message: 'Get user\'s info successfully!', userInfo: user})

  } catch (error) {
    console.log('error in getUserInfo function', error)
  }
}

// GET /user/:id/notification
exports.getNoti = async (req, res) => {
  try {
    var userID = req.params.id;
    // var userID = "651159001f1dc1a4a78665d7";
    const user = await User.findOne({_id: userID});
    const noties = user.noti;
    noties.reverse();
    res.json(noties);
  } catch (error) {
    console.log(error.message);
  }
};
// suplement function
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}