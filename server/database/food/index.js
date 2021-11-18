import mongoose, { mongo } from 'mongoose';

const FoodSchema = mongoose.Schema({
    name : {type:String , required:true},
    description : {type:String , required:true},
    isVeg : {type:Boolean , required:true},
    isNonveg : {type:Boolean , required:true},
    isContainsEgg : {type:Boolean , required:true},
    Photos : {type: mongoose.Types.ObjectId , ref:"Images"},
    price : {type:Number, default:150 , required:true},
    addOns : [{type: mongoose.Types.ObjectId , ref:"Foods"}],
    restaurant : {type: mongoose.Types.ObjectId , ref:"Restaurants" , required:true},

});

export const FoodModel = mongoose.model("Foods", FoodSchema);

