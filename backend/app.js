const express=require ('express');

require('dotenv').config()
//require('./models/db.js')
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   // useCreateIndex: true
}).then(()=>{
    console.log('our db is connected')
}).catch(err=>console.log(err.message))

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const User = require('./models/user')
const Task = require('./models/task')
const app=express();

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(8000,()=>{
    console.log("hihi")
});

