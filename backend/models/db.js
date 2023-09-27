const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   // useCreateIndex: true
}).then(()=>{
    console.log('our db is connected 2')
}).catch(err=>console.log(err.message))