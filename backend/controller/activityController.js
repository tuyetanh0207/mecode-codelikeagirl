const Activity = require('../models/activity');
const User = require('../models/user')
const geolib = require('geolib');

var idCampaign = "650b15ee597b737b1434c74f";


function compare(a, b){
  if (a.distance > b.distance) return 1;
  if (b.distance > a.distance) return -1;

  return 0;
}



class ActivityController {
    // GET /activity/tasklist
  static show = async (req, res) => {
    try {
      // Lấy tọa độ của người dùng từ req
      const userLatitude = parseFloat(req.body.latitude);
      const userLongitude = parseFloat(req.body.longitude);
      const userID = req.body.userID;

      // const userLatitude = 10.781115855332459; 
      // const userLongitude = 106.66876032407103;


      const tasklist = await Activity.find({idCampaign: idCampaign}).lean();
      const nearTaskList = [];
      for (let i = 0; i< tasklist.length;i++) {
        var task = tasklist[i];
        if(task.isContraint == false) {
          task['distance'] = 0;
          nearTaskList.push(task);

        }
        else {
          const distance = geolib.getDistance(
            { latitude: userLatitude, longitude: userLongitude },
            { latitude: task.latitude, longitude: task.longitude });
          if(distance < 50000) {
            task['distance'] = distance;
            nearTaskList.push(task);
          }
          // update noti
          if(distance<150 && userID != "") {

            var user = await User.findById(userID);
            
            var newNotiDate = new Date();
            var newNoti = {
              notiDate: newNotiDate,
              activityID: task._id,
              content: task.nameTask,
              distance: distance
            }
              
            
            var count = 0;
            var sameActivityID = 0;
            for (let i = 0; i<user.noti.length;i++) {
              if (user.noti[i].notiDate.toString().slice(0,15) == newNotiDate.toString().slice(0,15)) {
                count++;
              }
              if (user.noti[i].notiDate.toString().slice(0,15) == newNotiDate.toString().slice(0,15) && newNoti.activityID ==user.noti[i].activityID) {
                sameActivityID = 1;
              }
            }
            
            if (count < 4 &&sameActivityID==0 ) {
              // user.noti.push(newNoti);
              // await user.save();
              await User.findByIdAndUpdate(userID,{$push: {noti:newNoti }})
              
              // user= await User.findOne({_id: userID});
              // console.log(user.noti)
            }
          }
        }

      }
      
      nearTaskList.sort(compare);
      res.json(nearTaskList)
      // res.json(activity[0]);
    } catch (error) {
      console.log(error)
    }
  }


  static available = async (req, res) => {
    try {
      // Lấy tọa độ của người dùng từ req
      const userLatitude = parseFloat(req.body.latitude);
      const userLongitude = parseFloat(req.body.longitude);

      // const userLatitude = 10.781115855332459; 
      // const userLongitude = 106.66876032407103;

      const tasklist = await Activity.find({idCampaign: idCampaign}).lean();
      const availableTaskList = [];
      tasklist.forEach(task=> {
        if(task.isContraint == false) {
          task['distance'] = 0;
          availableTaskList.push(task);

        }
        else {
          const distance = geolib.getDistance(
            { latitude: userLatitude, longitude: userLongitude },
            { latitude: task.latitude, longitude: task.longitude });
          if(distance < 300) {
            task['distance'] = distance;
            availableTaskList.push(task);
          }

        }
      })
      availableTaskList.sort(compare);
      res.json(availableTaskList)
      
    } catch (error) {
      console.log(error)
    }
  }
} 

module.exports=ActivityController
