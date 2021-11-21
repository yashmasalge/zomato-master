// MAIN BACKEND FILE
require("dotenv").config();

// CORS,express,helmet
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

//mongoose connection
const connectDB = require("./database/connection");

// google authentication config
import googleAuthConfig from './config/google.config'

//API
import Auth from "./API/Auth"

// passport config
googleAuthConfig(passport);


const zomato = express();
// using json for post
zomato.use(express.json());
// USing CORS
zomato.use(cors());
// using Helemt
zomato.use(helmet());
// initilaizng and creating session
zomato.use(passport.initialize());
// zomato.use(passport.session());



// Application Routes
zomato.use("/auth",Auth);

//creating a port at 5000
zomato.listen(process.env.PORT || 5000,() =>
 connectDB().then((data) =>
 console.log("Server started successfully"))
 .catch((error) => console.log(error))
 );  
