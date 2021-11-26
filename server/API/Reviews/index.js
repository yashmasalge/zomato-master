// library
import express from "express";

// db model
import { ReviewModel } from "../../database/allModels"
import { ValidateId } from "../../validation/common";
import { ValidateReview } from "../../validation/review";

const Router = express.Router();

/**
 * Route        /:resid
 * Des          get all reviews for particluar restaurant
 * Params       resid
 * Access       Public
 * Method       GET
 */
Router.get("/:resid", async (req,res) => {
try{
  ValidateId(req.params);
    const {resid} = req.params;
    const reviews = await ReviewModel.find({restaurants : resid})
    return res.json({reviews})
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /new
 * Des          adding new food/restaurant review and rating 
 * Params       None
 * Access       Public
 * Method       POST
 */
Router.post("/new", async (req,res) => {
try{
    ValidateReview(req.body);
    const {reviewData} = req.body;

    await ReviewModel.create({ ...reviewData });
    return res.json({reivews : "successfully created Reviews"})
} catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /delete/:_id
 * Des          deleting new food/restaurant review and rating 
 * Params       _id
 * Access       Public
 * Method       DELETE
 */
 Router.delete("delete/:_id", async (req,res) => {
    try{
        const {_id} = req.params;
     await ReviewModel.findByIdAndDelete(_id);
        return res.json({reivews : "successfully deleted Review"})
    } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    });
    
export default Router;
