const campaign = require('../models/campaign');

var idCampaign = "65115ac21f1dc1a4a78665db";


function compare(a, b){
  if (a.score > b.score) return -1;
  if (b.score > a.score) return 1;

  return 0;
}

class campaignController {
    // GET /campaign/leaderboard
  static leaderboard = async (req, res) => {
    try {
      const campaignLastest = await campaign.findOne({_id: idCampaign}).lean();
      var leaderboard = campaignLastest.leaderboard;
      leaderboard.sort(compare);
      res.json(leaderboard);
      // res.json(campaignLastest.leaderboard);
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports=campaignController
