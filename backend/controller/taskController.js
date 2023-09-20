// const Task = require('../models/task');
// const geolib = require('geolib');

// class TaskController {
//     // GET /tasklist
//   static show = async (req, res) => {
//     try {
//       // Lấy tọa độ của người dùng từ req
//       //const userLatitude = parseFloat(req.query.latitude);
//       //const userLongitude = parseFloat(req.query.longitude);

//       const userLatitude = 10.781115855332459; 
//       const userLongitude = 106.66876032407103;

//       const nearbyPlaces = [];

//       const tasklist = await Task.find().lean();
//       const nearTaskList = [];
//       tasklist.forEach(task=> {
//         const distance = geolib.getDistance(
//           { latitude: userLatitude, longitude: userLongitude },
//           { latitude: task.latitude, longitude: task.longitude });
//         if(distance < 50000) {
//           task['distance'] = distance;
//           nearTaskList.push(task);
//         }
//       })
//       res.send(nearTaskList)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// } 

// module.exports=TaskController
