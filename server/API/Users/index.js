import express from "express";
import passport from "passport";

// db model
import { UserModel } from "../../database/allModels"

const Router = express.Router();

/**
 * Route        /
 * Des          GET authorized user data
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/", passport.authenticate("jwt"), async (req,res) => {
    try{
        const { eamil, fullName, phoneNumber, address } = req.session.passport.user._doc;

        return res.json({eamil, fullName, phoneNumber, address })
    }
    catch(error){
        return res.status(500).json({ error : error.message});
    }
});



/**
 * Route        /:_id
 * Des          get the user data
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/:_id", async (req,res) => {
try{
    const {_id} = req.params;
    const getUsers = await UserModel.findById(_id);
    const { fullName } = getUsers;

    if(!getUsers) return res.status(404).json({error : "No User Found"});

    return res.json({user : { fullName }});
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /update/:userid
 * Des          update user data
 * Params       :userId
 * Access       Public
 * Method       PUT
 */
Router.put("/update/:userid", async (req,res) => {
try{
    const { userid } = req.params;
    const {userdata} = req.body;

    const updateUser = await UserModel.findByIdAndUpdate({
        userid
    },
    {
        $put : userdata
    },
    {
        new : true
    })
    return res.json({user : updateUser});
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
