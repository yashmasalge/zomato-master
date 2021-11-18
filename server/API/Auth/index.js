// Library
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// models
import { UserModel } from "../../database/allModels";

// create a router
const Router = express.Router();

/** 
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       POST
*/

Router.post("/signup", async (req,res) =>{
    try{
        const {email, password, fullName, phoneNumber} = req.body.credentials;
        const checkUserbyEmail =await UserModel.findOne({email});
        const checkUserbyPhone = await UserModel.findOne({phoneNumber});
        if(checkUserbyEmail || checkUserbyPhone){
            return res.json({user : "user already exists"});
        }

        // Hash password
        const bycriptsalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bycriptsalt);

        // save to database
        await UserModel.create({
            ...req.body.credentials,
            password : hashedPassword
        })

        //generate JWT auth token (package name is jsonwebtoken)
        const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");

        return res.status(200).json({ token, status: "success" });
        }

    catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;