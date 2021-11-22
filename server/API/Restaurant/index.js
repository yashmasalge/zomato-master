import express from "express";

import { RestaurantModel } from "../../database/restaurant";
// create a router
const Router = express.Router();

/**
 * Route        /
 * Des          GET all the restaurant details based on the city
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length == 0) {
      return res.json({ error: "restaurants not found" });
    }

    return res.json({ restaurants });
  } catch(error){
    return res.status(500).json({error : error.message});
}
});

/**
 * Route        /:_id
 * Des          get individual restaurant details based on id
 * Params       none
 * Access       Public
 * Method       GET
 */
// http://localhost:4000/restaurant/12454dsfdofi438532
Router.get("/:_id", async (req,res) => {
    try{
        const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);
    if(!restaurant){return res.json({error : "No restaurant found"})};
    return res.json({restaurant});
    }
    catch(error){
        return res.status(500).json({error : error.message});
    }
});

/**
 * Route        /search
 * Des          Get restaurant details based on search string
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/search", async(req,res) =>{
    try{
        const { search } = req.params;
    const restaurant = await RestaurantModel.find({
        name : {$regex : search, $options : "i"},
    });
    if(!restaurant) {
        return res.status(404).json({error : `no restaurant matched with ${search} `})
    };
    return res.json({ restaurant });
    }catch (error) {
        return res.status(500).json({ error: error.message });
      }
});

export default Router;
