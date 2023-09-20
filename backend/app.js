const express = require("express");

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
const postRouter = require("./routes/post");
const Post = require("./models/post");
const app = express();

app.use(express.json());
app.use("/v1/user", userRouter);
// app.use("/v1/task", taskRouter)
app.use("/v1/activity", activityRouter)
app.use("/v1/post", postRouter);
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});
