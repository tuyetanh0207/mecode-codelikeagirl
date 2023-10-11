const Activity = require('../models/activity');
const User = require('../models/user')
const geolib = require('geolib');

var idCampaign = "65115ac21f1dc1a4a78665db";


function compare(a, b) {
  if (a.distance > b.distance) return 1;
  if (b.distance > a.distance) return -1;

  return 0;
}



class ActivityController {
  // GET /activity/tasklist
  static show = async (req, res) => {
    try {
      // Lấy tọa độ của người dùng từ req

      // console.log(req.query.latitude)
      const userLatitude = parseFloat(req.query.latitude);
      const userLongitude = parseFloat(req.query.longitude);
      console.log('location', userLatitude, userLongitude)
      const userID = req.query.userID;

      // const userLatitude = 10.781115855332459; 
      // const userLongitude = 106.66876032407103;


      const tasklist = await Activity.find({ idCampaign: idCampaign }).lean();
      const nearTaskList = [];
      for (let i = 0; i < tasklist.length; i++) {
        var task = tasklist[i];
        if (task.isContraint == false) {
          task['distance'] = 0;
          task['latitude'] = userLatitude;
          task['longitude'] = userLongitude;
          nearTaskList.push(task);

        } else {

          const distance = geolib.getDistance(
            { latitude: userLatitude, longitude: userLongitude },
            { latitude: task.latitude, longitude: task.longitude });
          if (distance < 20000000) {
            // if(distance < 50000) {

            task['distance'] = distance;
            nearTaskList.push(task);
          }
        }
      }

      nearTaskList.sort(compare);
      console.log("sending tasklist");
      res.json(nearTaskList)
      // res.json(activity[0]);
    } catch (error) {
      console.log(error)
    }
  }


  static available = async (req, res) => {
    try {
      const userLatitude = parseFloat(req.query.latitude);
      const userLongitude = parseFloat(req.query.longitude);

      // const userLatitude = 10.781115855332459; 
      // const userLongitude = 106.66876032407103;

      const tasklist = await Activity.find({ idCampaign: idCampaign }).lean();
      const availableTaskList = [];
      tasklist.forEach(task => {
        if (task.isContraint == false) {
          task['distance'] = 0;
          availableTaskList.push(task);

        }
        else {
          const distance = geolib.getDistance(
            { latitude: userLatitude, longitude: userLongitude },
            { latitude: task.latitude, longitude: task.longitude });
          if (distance < 20000000) {
            task['distance'] = distance;
            availableTaskList.push(task);
          }

        }
      })
      availableTaskList.sort(compare);
      console.log("sending available tasklist");
      res.json(availableTaskList)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ActivityController
