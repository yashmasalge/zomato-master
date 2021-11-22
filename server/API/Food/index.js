import express from "express";

import { FoodModel } from "../../database/food";
// create a router
const Router = express.Router();

/**
 * Route        /
 * Des          GET all food based on particluar Restaurant
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/r/:_id",async (req,res) => {
    try{
        const { _id } = req.params;
        const foods = FoodModel.find({ restaurant : _id });
     }
    catch(error){
        return res.status(500).json({error : error.message});
    }
})


export default Router;