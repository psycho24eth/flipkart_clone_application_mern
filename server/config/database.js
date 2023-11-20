const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://demo:gojo@cluster0.pmxt04h.mongodb.net/?retryWrites=true&w=majority";

const connect = () =>{
   // mongoose.set('strictQuery', false);

   mongoose.connect(MONGO_URL,  {
      useNewUrlParser: true,
      // useUnifiedTopology: true
  }).then(()=>{
   console.log("database is connected");
  }).catch((err)=>{
      console.log(err)
   })
} 


module.exports = {connect}