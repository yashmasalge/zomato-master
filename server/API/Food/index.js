import express from "express";

import { FoodModel } from "../../database/food";
import { ValidateId, ValidateCategory} from '../../validation/common';
// create a router
const Router = express.Router();
/**
 * Route        /r/:_id
 * Des          GET all food based on particluar Restaurant
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    ValidateId(req.params);
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    if (foods.length == 0) {
      return res.json({ Error: "No restaurants found" });
    }
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /c/:category
 * Des          GET all food based on particluar category
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/c/:category", async (req, res) => {
  try {
    ValidateCategory(req.params);
    const { category } = req.params;
    const foods = await FoodModel.find({
      name: { $regex: category, $options: "i" },
    });
    if(!foods) {
        return res.status(404).json({error : `no restaurant matched with ${category} `})
    };
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
