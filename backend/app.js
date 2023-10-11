const express = require("express");
const os = require("os");

require("dotenv").config();
// require('./models/db.js')
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("our db is connected");
  })
  .catch((err) => console.log(err.message));

const userRouter = require("./routes/user");
const User = require("./models/user");
// const taskRouter = require('./routes/task')
// const Task = require('./models/task')
const activityRouter = require('./routes/activity')
const Activity = require('./models/activity')
const campaignRouter = require('./routes/campaign')
const Campaign = require('./models/campaign')

const luckywheelRouter = require('./routes/luckywheel')
const Luckywheel = require('./models/luckywheel')

const postRouter = require("./routes/post");
const Post = require("./models/post");
const app = express();

app.use(express.json());
app.use("/v1/user", userRouter);
// app.use("/v1/task", taskRouter)
app.use("/v1/activity", activityRouter)
app.use("/v1/campaign", campaignRouter)
app.use("/v1/post", postRouter);
app.use("/v1/luckywheel", luckywheelRouter);
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

const server = app.listen(8000, '0.0.0.0', () => {
  const port = server.address().port;
  const networkInterfaces = os.networkInterfaces();
  const wifiInterface = networkInterfaces["Wi-Fi"] || networkInterfaces["wlan0"];
  const wifiIPv4 = wifiInterface && wifiInterface.find(item => item.family === 'IPv4');

  if (wifiIPv4) {
    console.log(`Server is running at http://${wifiIPv4.address}:${port}`);
  } else {
    console.log("Wi-Fi adapter not found or does not have an IPv4 address.");
  }
});