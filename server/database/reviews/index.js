import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
       restaurant : { type: mongoose.Types.ObjectId,ref: "Restaurants"},
       food : { type: mongoose.Types.ObjectId,ref: "Foods"},
       user : { type: mongoose.Types.ObjectId,ref: "Users"},
       rating : {type:Number , required:true},
        reviewText : {type : String, required : true},
        isRestaurantReview : Boolean,
        isFoodReview : Boolean,
        photos : [
            {
                type :  mongoose.Types.ObjectId,
                ref : 'Images',
            },
        ],
    },
    {
        timestamps : true
    }
);

export const ReviewModel = mongoose.model("Reviews", reviewSchema);