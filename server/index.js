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

// private route auth config
import privateRouteConfig from "./config/route.config"

//API
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurant"
import Food from "./API/Food"
import Menu from "./API/Menu"
import Image from "./API/Image"
import Order from "./API/Orders"
import Review from "./API/Reviews"
import User from "./API/Users"

// passport config
googleAuthConfig(passport);
// Private Route config
privateRouteConfig(passport);


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
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

//creating a port at 5000
zomato.listen(process.env.PORT || 5000,() =>
 connectDB().then((data) =>
 console.log("Server started successfully"))
 .catch((error) => console.log(error))
 );  
