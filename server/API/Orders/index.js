import express from "express";
import passport from "passport";

// db model
import { OrderModel } from "../../database/allModels"

import  validateUser  from "../../config/validateUser"

const Router = express.Router();

/**
 * Route        /:_id
 * Des          get all orders based on id
 * Params       _id
 * Access       Private
 * Method       GET
 */
Router.get("/:_id",passport.authenticate("jwt"), async (req,res) => {
try{
    await validateUser(req,res);
    const {_id} = req.params;
    const getOrders = await OrderModel.findOne({user : _id});
    if(!getOrders) return res.status(404).json({error : "No orders Found"});
    return res.json(getOrders)
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /new/:_id
 * Des          adding new order
 * Params       :_id
 * Access       Private
 * Method       POST
 */
Router.post("/new/:_id",passport.authenticate("jwt"), async (req,res) => {
try{
    const {_id} = req.params;
    const {orderdetails} = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate({
        user : _id
    },{
        $push : {orderdetails}
    },{
        new : true
    })

    return res.json({order : addNewOrder});
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
