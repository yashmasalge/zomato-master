import joi from "joi";

export const ValidateReview = (userData) => {
const Schema = joi.object({
    food : joi.string().required(),
    restaurant : joi.string().required(),
    user : joi.number().required(),
    reviewText : joi.string().required(),
    isRestaurantReview : joi.bool(),
    isFoodReview : joi.bool(),
    photos : joi.array().items(joi.object({photos : joi.object, ref : joi.string()}))
});
return Schema.validateAsync(userData);
}