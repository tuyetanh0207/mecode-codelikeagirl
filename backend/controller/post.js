const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const User = require("../models/user")
const Campaign = require("../models/campaign")
const cloudinary = require("../helper/imageUpload");


var idCampaign = "65115ac21f1dc1a4a78665db";


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

exports.vote = async (req,res) => {
  try {
    const {userVoteID, postVotedID, userVotedID} = req.body;
    var totalPointUserVote,totalPointUserVoted  =0

    var post = await Post.findOne({_id: postVotedID});
    post.votedPoint += 1;
    await post.save();
    

    var userVote = await User.findOne({_id: userVoteID});
    for (let i =0;i<userVote.campaignPoint.length;i++) {
      if(userVote.campaignPoint[i].campaignID == idCampaign) {
        var newVotingPoint =  userVote.campaignPoint[i].votingPoint + 1;

        User.findOneAndUpdate({_id: userVoteID},
          {$set: {"campaignPoint.$[campaign].votingPoint":newVotingPoint}},
          { arrayFilters: [{"campaign.campaignID": idCampaign}],new : true},
          )
        .then((updatedDocument) => {
          updatedDocument.save();
        })
        .catch((err) => {
          console.error(err);
        });

        
        userVote = await User.findOne({_id: userVoteID});
       
        totalPointUserVote = userVote.campaignPoint[i].votingPoint + userVote.campaignPoint[i].votedPoint + userVote.campaignPoint[i].postPoint;
        console.log(newVotingPoint,totalPointUserVote)
        
        break;

      }
    }

    var userVoted = await User.findOne({_id: userVotedID});
    
    for (let i =0;i<userVoted.campaignPoint.length;i++) {
      if(userVoted.campaignPoint[i].campaignID == idCampaign) {
        var newVotedPoint =  userVoted.campaignPoint[i].votedPoint + 1;
        User.findOneAndUpdate({_id: userVotedID},
          {$set: {"campaignPoint.$[campaign].votedPoint":newVotedPoint}},
          { arrayFilters: [{"campaign.campaignID": idCampaign}],new : true},
          )
        .then((updatedDocument) => {
          updatedDocument.save();
        })
        .catch((err) => {
          console.error(err);
        });

        
        userVoted = await User.findOne({_id: userVotedID});
       
        totalPointUserVoted = userVoted.campaignPoint[i].votingPoint + userVoted.campaignPoint[i].votedPoint + userVoted.campaignPoint[i].postPoint;
        console.log(newVotedPoint,totalPointUserVoted)
        
        break;

      }
    }

    var campaign = await Campaign.findOne({_id: idCampaign})
    for (let i =0;i<campaign.leaderboard.length;i++) {
      if(campaign.leaderboard[i].userID == userVotedID) {

        Campaign.findOneAndUpdate({_id: idCampaign},
          {$set: {"leaderboard.$[leaderboard].score":totalPointUserVoted}},
          { arrayFilters: [{"leaderboard.userID": userVotedID}],new : true},
          )
        .then((updatedDocument) => {
          
          console.log(updatedDocument);
          updatedDocument.save();
        })
        .catch((err) => {
          console.error(err);
        });
        
      }
      if(campaign.leaderboard[i].userID == userVoteID) {
        Campaign.findOneAndUpdate({_id: idCampaign},
          {$set: {"leaderboard.$[leaderboard].score":totalPointUserVote}},
          { arrayFilters: [{"leaderboard.userID": userVoteID}],new : true},
          )
        .then((updatedDocument) => {
          
          console.log(updatedDocument);
          updatedDocument.save();
        })
        .catch((err) => {
          console.error(err);
        });
        
      }
    }
    res.json( {success:1})

  } catch(err) {
    console.log(err);
  }
}
