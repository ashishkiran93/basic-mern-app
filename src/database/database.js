const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config({path:'D:/Projects/Project_1/backend/config.env'})

mongoose.connect(process.env.DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database connected successfully")
}).catch(err=>console.log(err))