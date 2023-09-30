const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const Campaign = require("../models/campaign");
const LuckyWheel = require("../models/luckywheel");
const User = require("../models/user");
const cloudinary = require("../helper/imageUpload");


var idCampaign = "65115ac21f1dc1a4a78665db";


exports.createPost = async (req, res) => {
  console.log("running posting");
  const { user } = req;
  const currUser = await User.findOne(user._id);
  console.log("current user", currUser);
  if (!user._id)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });
  const {
    userId,
    taskName,
    taskId,
    caption,
    shortAddr,
    idCampaign,
    isContraint,
    isMp4,
  } = req.body;
  let {address, luckywheelID} = req.body
  if (!luckywheelID){
    luckywheelID=''
  }
  if(!address){
    address=''
  }

  const len = req.files.length;
  // all attribute which have default value
  const votedPoint = 0;

  let photo_urls = [];
  let post;
  try {
    var mp4ReExpression = /\.mp4$/;
    req.files.forEach(async (file, idx) => {
      // check if it a video
      // if a video
      // console.log('file idx', idx, ' ', file.path)
      let result = "";
      if (isMp4) {
        // console.log('is Mp4 file:', idx)
        try {
          result = await cloudinary.uploader.upload(file.path, {
            resource_type: "video",
            public_id: `${user._id}_post_${Date()}_${idx}`,
            width: 500,
            height: 500,
            crop: "fill",
          });
        } catch (error) {
          console.log("error in uploading cloudinary", error);
        }
      } else {
        // console.log('is Photo file:', idx)
        try {
          result = await cloudinary.uploader.upload(file.path, {
            public_id: `${user._id}_post_${Date()}_${idx}`,
            width: 500,
            height: 500,
            crop: "fill",
          });
        } catch (error) {
          console.log("error in uploading cloudinary", error);
        }
      }
      // console.log('done upload cloudinary:', idx)
      photo_urls.push(result.url);
      //photo_urls.push('');
      if (photo_urls.length === len) {
        post = await Post({
          userId: userId,
          taskName: taskName,
          taskId: taskId,
          caption: caption,
          photos: photo_urls,
          address: address,
          campaignId: idCampaign,
          votedPoint: votedPoint,
          createdDate: Date(),
          shortAddr: shortAddr,
          luckywheelID: luckywheelID,
        });
        await post.save();
        await res.status(201).json({
          success: true,
          message: "Create post successfully!",
          post: {
            id: post._id,
            userId: post.userId,
            taskName: post.taskName,
            taskId: post.taskId,
            caption: post.caption,
            photos: post.photos,
            address: post.address,
            campaignId: post.campaignId,
            votedPoint: post.votedPoint,
            createdDate: post.createdDate,
            shortAddr: post.shortAddr,
            luckywheelID: post.luckywheelID,
            avatar: user.avatar,
            fullname: user.fullname
          },
          //post: post
        });
        console.log('post', post)
        console.log("done saving");

      }
    });
    console.log("start update point");
    //// update currentParticipant of luckywheel
    const currCampaignPointIdx = currUser.campaignPoint.findIndex(
      (camp) => camp.campaignID === idCampaign
    );
    console.log("currCampId", currCampaignPointIdx);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    console.log("date", year, month, day);

    const greenStepId = currUser.greenStep.findIndex((gp) => gp.year === year);
    console.log("greenStep Id", greenStepId);
    if (
      currUser.campaignPoint[currCampaignPointIdx].joinedCities.indexOf(
        luckywheelID
      ) !== -1
    ) {
      console.log("user already joined this city.");
      try {
        const updateObject = {
          $inc: {
            [`greenStep.${greenStepId}.greenPoint.${month}.${day - 1}`]: 1,
            [`campaignPoint.${currCampaignPointIdx}.postPoint`]: 5,
          }
        };
        await User.findByIdAndUpdate(user._id, updateObject);
      } catch (error) {
        console.log("error when update greenstep", error);
      }

    } else {
      try {
        const updateObject = {
          $inc: {
            [`greenStep.${greenStepId}.greenPoint.${month - 1}.${day - 1}`]: 1,
            [`campaignPoint.${currCampaignPointIdx}.postPoint`]: 5,
          },
          $push: {
            [`campaignPoint.${currCampaignPointIdx}.joinedCities`]:
              luckywheelID,
          },
        };
        await User.findByIdAndUpdate(user._id, updateObject);
        await LuckyWheel.findByIdAndUpdate(luckywheelID, {
          $inc: { currentParticipant: 1 },
        });
      } catch (error) {
        console.log("error when update greenstep", error);
      }
      console.log("done updating currentParticipant");
    }
   
    

    console.log("done update all points");
  } catch (error) {
    console.log("Error while creating post.", error);
  }
};

exports.getAllPostOfUser = async (req, res) => {
  console.log("running getAllpostOfUser");
  const userId = req.params.id;
  const { user } = req;
  if (!user._id) {
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access" });
  }
  try {
    let posts;
    let str =
      "userId taskName taskId campaignId caption photos votedPoint createdDate";
    console.log("user request", user._id);
    console.log("user info", userId);
    let fullname
    let avatar
    if (userId == user._id) {
      console.log("bang nhau", userId == user._id);
      fullname=user.fullname
      avatar=user.avatar
       //shortAddr address
      posts = await Post.find({ userId: userId })
        .select(
          "userId taskName taskId shortAddr address campaignId caption photos votedPoint createdDate"
        )
        .exec();
    } else {
      const currentUser = await User.findOne(userId)
      fullname = currentUser.fullname
      avatar= currentUser.avatar
      posts = await Post.find({ userId: userId })
        .select(
          "userId taskName taskId campaignId caption photos votedPoint createdDate"
        )
        .exec();
    }
    //console.log("posts", posts);
    res
      .status(201)
      .json({
        success: true,
        message: "Get all post of user successfully!",
        posts: posts,
        avatar: avatar,
        fullname: fullname
      });
  } catch (error) {
    console.log("error in getAllPostOfUser function", error);
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
        var newVotingPoint
        if (!userVote.campaignPoint[i].votingPoint){
          newVotingPoint=0
        }
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
       if(!userVote.campaignPoint[i].votingPoint )
       totalPointUserVote = 0
        totalPointUserVote = userVote.campaignPoint[i].votingPoint + userVote.campaignPoint[i].votedPoint + userVote.campaignPoint[i].postPoint;
        // console.log(newVotingPoint,totalPointUserVote)
        
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
        // console.log(newVotedPoint,totalPointUserVoted)
        
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
          
          // console.log(updatedDocument);
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
          
          // console.log(updatedDocument);
          updatedDocument.save();
        })
        .catch((err) => {
          console.error(err);
        });
        
      }
    }
    // campaign = await Campaign.findOne({_id: idCampaign})
    // console.log(campaign.leaderboard)


    console.log("vote thanh cong")
    res.json( {success:1})

  } catch(err) {
    console.log(err);
  }
}
