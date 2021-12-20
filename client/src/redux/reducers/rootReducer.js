import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer"
import image from "./image/image.reducer"
import reviews from "./review/review.reducer"
import user from "./user/user.reducer"

const roootReducer = combineReducers({restaurant, image, reviews, user});

export default roootReducer;