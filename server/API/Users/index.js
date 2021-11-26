import express from "express";

// db model
import { UserModel } from "../../database/allModels"

const Router = express.Router();

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
    if(!getUsers) return res.status(404).json({error : "No User Found"});
    return res.json(getUsers)
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
