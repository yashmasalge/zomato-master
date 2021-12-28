import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer"
import image from "./image/image.reducer"
import reviews from "./review/review.reducer"
import user from "./user/user.reducer"
import food from "./food/food.reducer"
import auth from "./auth/auth.reducer"
import cart from "./cart/cart.reducer"

const roootReducer = combineReducers({restaurant, image, reviews, user, food, auth, cart});

export default roootReducer;