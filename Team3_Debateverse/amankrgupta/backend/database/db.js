const mongoose = require('mongoose');

const db=()=>{
  mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("database connected")
  }).catch((err)=>console.log(err))
}

module.exports = db;