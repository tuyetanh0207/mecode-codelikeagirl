const Luckywheel = require('../models/luckywheel');
const User = require('../models/user');
// const user = require('../models/user');

var idCampaign = "65115ac21f1dc1a4a78665db";


function compare(a, b){
  if (a.score > b.score) return -1;
  if (b.score > a.score) return 1;

  return 0;
}

class luckywheelController {
    // GET /luckywheel/:id
  static show = async (req, res) => {
    try {
      var userID = req.params.id;

      var luckywheelList = await Luckywheel.find({campaignID: idCampaign}).lean();
      const user = await User.findOne({_id: userID});
      var campaignUser = {};
      for (let i = 0; i<user.campaignPoint.length;i++) {
        if (user.campaignPoint[i].campaignID == idCampaign) {
          campaignUser = user.campaignPoint[i];
        }

      }
      const userJoinedCities = campaignUser.joinedCities;


      // isOpen = 0 -> user khong tham gia
      // isOpen = 1 -> user co tham gia va du participant
      // isOpen = 2 -> user co tham gia nma chua du participant

      for (let i = 0; i<luckywheelList.length;i++) {
        luckywheelList[i]['isOpen'] = 0;
        for (let j = 0; j<userJoinedCities.length;j++) {
          if (luckywheelList[i]._id==userJoinedCities[j]) {
            if (luckywheelList[i].currentParticipant < luckywheelList[i].requireParticipant)
            {
              luckywheelList[i]['isOpen'] = 2;
              break;

            }
            else 
            {
              luckywheelList[i]['isOpen'] = 1;
              break;
            }
            
          }  
        }
      }
      
      res.json(luckywheelList);
      // res.json(campaignLastest.leaderboard);
    } catch (error) {
      console.log(error)
    }
  }

  // POST /luckywheel/:userID/:luckyWheelID/shipment
  static shipment = async (req, res) => {
    try {
      var userID = req.params.userID;
      var luckyWheelID = req.params.luckyWheelID;
      var { nameGift, addr, quantity} = req.body;

      var newShipment = {
          addr: addr,
          userId: userID,
          quantity: quantity,
          date: Date.now(),
          status: "dang chuan bi hang"
      };

      var luckywheel = await Luckywheel.findOne({_id: luckyWheelID});
      
      var index = -1;
      for (let i = 0;i<luckywheel.giftList.length;i++) {
        console.log(luckywheel.giftList[i])
        if (luckywheel.giftList[i].nameGift == nameGift) {
          
          index = i;
        }

      }
      if (index!=-1) {
        if (quantity > luckywheel.giftList[index].restQuantity) {
          res.json({
            status: "failed",
            message: "so luong qua tang khong du"
          })
        }
        else {
          luckywheel.giftList[index].shipment.push(newShipment);
          luckywheel.giftList[index].restQuantity-=quantity;
          await luckywheel.save();
          luckywheel = await Luckywheel.findOne({_id: luckyWheelID});

        // res.json(luckywheelList);
        // res.json(campaignLastest.leaderboard);
          res.json({
            status: "success",
            luckywheel
          })

        }
        
      }
      else {
        res.json({
          status: "failed",
          message: "khong tim thay nameGift"

        })
      } 
    } catch (error) {
      console.log(error)
    }
  }
}





module.exports=luckywheelController
