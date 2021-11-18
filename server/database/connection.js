// import mongoose from "mongoose";
const mongoose = require('mongoose')
const connectToDB = async () => mongoose.connect(process.env.mongodb_url,{
    useNewUrlParser : true,  
    useUnifiedTopology : true,

});

module.exports = connectToDB;