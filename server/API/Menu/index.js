import express from "express";

// db model
import { MenuModel, ImageModel } from "../../database/allModels";
import { ValidateId } from "../../validation/common"

const Router = express.Router();

/**
 * Route        /list/:_id
 * Des          list menu based on restaurant ID
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    // ValidateId(req.params);
    const { _id } = req.params;
    const menu = await MenuModel.findById(_id);
    if (!menu)
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    return res.json({ menu });
  } catch (error) {
    return res.status(500).json({ error: error});
  }
});

/**
 * Route        /image/:_id
 * Des          get all list of menu images with restaurant ID
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/image/:_id", async (req, res) => {
  try {
    ValidateId(req.params);
    const { _id } = req.params;
    const menuImg = await ImageModel.findOne(_id);
    if (!menuImg)
      return res
        .status(404)
        .json({ error: "No Images present for this restaurant" });
    return res.json({ menuImg });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
