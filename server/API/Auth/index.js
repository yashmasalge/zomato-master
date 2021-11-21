// Library
import express from "express";
import passport from "passport";
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
Router.post("/signup",async(req,res) => {
    try{
        await UserModel.findbyEmailandPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({token, status : "user created"});
    }
    catch(error){
        return res.status(500).json({error : error.message});
    }
})

Router.post("/signin",async (req,res) =>{
    try{
        const user =await UserModel.findbyEmailandPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token, status : "Signed in Successfully"});
    }
    catch(error){
        return res.status(500).json({error : error.message});
    }
})

/** 
 * Router       /google
 * Des          google signin
 * Params       none
 * Access       Public
 * Method       GET
*/
Router.get("/google", passport.authenticate("google",{
scope : [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
]
} ));

/** 
 * Router       /google/callback
 * Des          google signin callback
 * Params       none
 * Access       Public
 * Method       GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect : "/"}),
(req,res) => {
return res
.status(200)
.json({token: req.session.passport.user.token, status : "success" });
}
);

export default Router;

// DUMMY CODE

// Router.post("/signup", async (req,res) =>{
//     try{
//         const {email, password, fullName, phoneNumber} = req.body.credentials;
//         const checkUserbyEmail =await UserModel.findOne({email});
//         const checkUserbyPhone = await UserModel.findOne({phoneNumber});
//         if(checkUserbyEmail || checkUserbyPhone){
//             return res.json({user : "user already exists"});
//         }

//         // Hash password
//         const bycriptsalt = await bcrypt.genSalt(8);
//         const hashedPassword = await bcrypt.hash(password, bycriptsalt);

//         // save to database
//         await UserModel.create({
//             ...req.body.credentials,
//             password : hashedPassword
//         })

//         //generate JWT auth token (package name is jsonwebtoken)
//         const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");

//         return res.status(200).json({ token, status: "success" });
//         }

//     catch(error){
//         return res.status(500).json({error:error.message});
//     }
// });