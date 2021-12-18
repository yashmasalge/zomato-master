import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer"
import image from "./image/image.reducer"

const roootReducer = combineReducers({restaurant, image});

export default roootReducer;