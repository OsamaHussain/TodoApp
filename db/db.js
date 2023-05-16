const mongoose = require("mongoose");

async function connectDb(){
    try{
       await mongoose.connect(process.env.MONGO_URL,{
          useNewUrlParser: true,
          useUnifiedTopology: true
       });
       console.log("Database connected Successfuly!")
    }catch(error){
       console.log(error);
    }
 }

module.exports = connectDb;