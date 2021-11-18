import mongoose, { mongo } from "mongoose";

const restaurantSchema = mongoose.Schema(
    {
        name : { type: String, required: true },
        city : { type: String, required: true },
        mapLocation : { type: String, required: true },
        cuisine : [String],
        restaurantTimings : String,
        contactNumber : Number,
        website : String,
        popularDishes : [String],
        averageCost : Number,
        amenities : [String], 
        menuImages:{
            type: mongoose.Types.ObjectId,
            ref: "Images",
        },
        menu: {
            type: mongoose.Types.ObjectId,
            ref: "Menus"
        },
        reviews: { type: mongoose.Types.ObjectId,ref: "Foods"},
        photos : { type: mongoose.Types.ObjectId, ref: "Images"}
    }
);

const RestaurantModel = mongoose.model("Restaurants", restaurantSchema);

module.exports = RestaurantModel;   