// MAIN BACKEND FILE
require("dotenv").config();

// CORS,express,helmet
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

//mongoose connection
const connectDB = require("./database/connection");

//API
import Auth from "./API/Auth"


const zomato = express();
// using json for post
zomato.use(express.json());
// USing CORS
zomato.use(cors());
// using Helemt
zomato.use(helmet());

// Application Routes
zomato.use("/auth",Auth);

//creating a port at 5000
zomato.listen(process.env.PORT || 5000,() =>
 connectDB().then((data) =>
 console.log("Server started successfully"))
 .catch((error) => console.log(error))
 );  
