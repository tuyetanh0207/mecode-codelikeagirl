const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const cloudinary = require("../helper/imageUpload");
exports.createPost = async (req, res) => {
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
        });
        await post.save();
        console.log("done saving");
      }
    });

    res.status(201).json({
      success: true,
      message: "Create post successfully!",
      post: post,
    });
  } catch (error) {
    console.log("Error while process photos when creating post.");
  }
};
