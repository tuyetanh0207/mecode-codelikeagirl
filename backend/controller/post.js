const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const cloudinary = require("../helper/imageUpload");
exports.createPost = async (req, res) => {
  console.log(('running posting'))
  const { user } = req;
  if (!user._id)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });
  const { userId, taskName, taskId, caption, address, isMp4 } = req.body;

  const len = req.files.length;
  const votedPoint = 0;
  const campaignId = "aaa";
  let photo_urls = [];
  let post;
  try {
    var mp4ReExpression = /\.mp4$/;
    req.files.forEach(async (file, idx) => {
      // check if it a video
      // if a video
      console.log('file idx', idx, ' ', file.path)
      let result=''
      if(isMp4){
        console.log('is Mp4 file:', idx)
        try {
          result = await cloudinary.uploader.upload(file.path, {
            resource_type: 'video',
            public_id: `${user._id}_post_${Date()}_${idx}`,
            width: 500,
            height: 500,
            crop: "fill",
          });
          
        } catch (error) {
          console.log('error in uploading cloudinary', error)
        }
      
      } else{
        console.log('is Photo file:', idx)
        try {
          result = await cloudinary.uploader.upload(file.path, {
            public_id: `${user._id}_post_${Date()}_${idx}`,
            width: 500,
            height: 500,
            crop: "fill",
          });
        } catch (error) {
          console.log('error in uploading cloudinary', error)
        }
       
      }
      console.log('done upload cloudinary:', idx)
      photo_urls.push(result.url);
      if (photo_urls.length === len) {
        post = await Post({
          userId: userId,
          taskName: taskName,
          taskId: taskId,
          caption: caption,
          photos: photo_urls,
          address: address,
          campaignId: campaignId,
          votedPoint: votedPoint,
          createdDate: Date()
        });
        await post.save();
        res.status(201).json({
          success: true,
          message: "Create post successfully!",
          post: {
            _id: post._id,
            userId: post.userId,
            taskName: post.taskName,
            taskId: post.taskId,
            caption: post.caption,
            photos: post.photos,
            address: post.address,
            campaignId: post.campaignId,
            votedPoint: post.votedPoint,
            createdDate: post.createdDate
    
          }
        });
        console.log("done saving");
      }
    });

    
  } catch (error) {
    console.log("Error while process photos when creating post.");
  }
};

exports.getAllPostOfUser = async (req,res) => {
  console.log('running getAllpostOfUser')
  const userId = req.params.id;
  const { user } = req;
  if (!user._id) {
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });
  }
  try {
    let posts
    let str ='userId taskName taskId campaignId caption photos votedPoint createdDate'
    console.log('user request', user._id)
    console.log('user info', userId)
    
    if (userId==user._id) {
      console.log('bang nhau', userId==user._id) //shortAddr address
      posts =await  Post.find({ userId: userId }).select('userId taskName taskId shortAddr address campaignId caption photos votedPoint createdDate').exec();

    } else 
    {

      posts = await Post.find({ userId: userId }).select('userId taskName taskId campaignId caption photos votedPoint createdDate').exec();
   }
   console.log('posts',posts)
    res.status(201).json({success: true, message: 'Get all post of user successfully!', posts: posts})

  } catch (error) {
    console.log('error in getAllPostOfUser function', error)
  }
}