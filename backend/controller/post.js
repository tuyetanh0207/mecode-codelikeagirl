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
  const { userId, taskName, taskId, caption, address } = req.body;

  const len = req.files.length;
  const votedPoint = 0;
  const campaignId = "aaa";
  let photo_urls = [];
  let post;
  try {
    req.files.forEach(async (file, idx) => {
      const result = await cloudinary.uploader.upload(file.path, {
        public_id: `${user._id}_post_${Date()}_${idx}`,
        width: 500,
        height: 500,
        crop: "fill",
      });
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

exports.votelist = async (req, res) => {
  var userID = req.query.userID;
  var postList = await Post.find({userId: {$ne:userID }}).sort({votedPoint:1});

  var post1, post2 = {};
  var found = 0;

  if (postList.length > 1) {
    for (let i = 0;i<postList.length-1;i++) {
      post1 = postList[i];
      
      for (let j = i + 1;j<postList.length;j++) {
        if(post1.taskId == postList[j].taskId ) {
          post2 = postList[j];
          found = 1;
          break;
        }
      }
      if(found == 1) {
        break;
      }
  
    }

  }
  if (found == 1) {
    var voteList = [post1, post2]
    res.json(voteList)
  } else {
    res.json(
      {
      success: 0,
      message: "khong tim thay post de vote"
      }
      
    )
    }
  
}
