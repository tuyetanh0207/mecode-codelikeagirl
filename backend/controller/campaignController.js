const campaign = require('../models/campaign');
const User = require('../models/user');

var idCampaign = "65115ac21f1dc1a4a78665db";


function compare(a, b) {
  if (a.score > b.score) return -1;
  if (b.score > a.score) return 1;

  return 0;
}

class campaignController {
  // GET /campaign/leaderboard
  static leaderboard = async (req, res) => {
    try {
      var campaignLastest = await campaign.findOne({ _id: idCampaign });
      var leaderboardLatest = campaignLastest.leaderboard;

      leaderboardLatest.sort(compare);
      res.json({
        startDate:campaignLastest.startDate,
        endDate:campaignLastest.endDate,
        leaderboard:leaderboardLatest
      }
        );

    } catch (error) {
      console.log(error)
    }
  }

  // GET /campaign/leaderboard/user/:id/rank
  static rank = async (req, res) => {
    try {
      var userID = req.params.id;

      const campaignLastest = await campaign.findOne({ _id: idCampaign }).lean();
      var leaderboard = campaignLastest.leaderboard;
      leaderboard.sort(compare);

      var foundIndex = -1;
      for (let i = 0; i < leaderboard.length; i++) {
        if (leaderboard[i].userID == userID) {
          foundIndex = i;
          break;
        }
      }

      if (foundIndex == -1) {
        res.json({
          status: "false",
          message: "User not found"
        });
      } else {
        res.json(
          {
            userID: userID,
            rank: foundIndex + 1
          }
        );
      }

    } catch (error) {
      console.log(error)
    }
  }
}



module.exports = campaignController
