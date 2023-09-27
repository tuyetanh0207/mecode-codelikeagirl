const Activity = require('../models/activity');
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
      const userLatitude = parseFloat(req.query.latitude);
      const userLongitude = parseFloat(req.query.longitude);

      // const userLatitude = 10.781115855332459; 
      // const userLongitude = 106.66876032407103;

      const nearbyPlaces = [];

      const tasklist = await Activity.find({idCampaign: idCampaign}).lean();
      const nearTaskList = [];
      tasklist.forEach(task=> {
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

        }
      })
      nearTaskList.sort(compare);
      res.json(nearTaskList)
      // res.json(activity[0]);
    } catch (error) {
      console.log(error)
    }
  }
} 

module.exports=ActivityController
