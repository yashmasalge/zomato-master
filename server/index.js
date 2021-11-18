// MAIN BACKEND FILE
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });  
  import express from 'express';
require("dotenv").config();

// CORS,express,helmet
import cors from 'cors';
import helmet from 'helmet';

//mongoose connection
const connectDB = require("./database/connection");
//mongoose model


const zomato = express();
// using json for post
zomato.use(express.json());
// USing CORS
zomato.use(cors());
// using Helemt
zomato.use(helmet());

//creating a port at 5000
zomato.listen(process.env.PORT || 5000,() =>
 connectDB().then((data) =>
 console.log("Server started successfully"))
 .catch((error) => console.log(error))
 );  

// zomato.listen(5000,() => {console.log("Server stareted successfully")})