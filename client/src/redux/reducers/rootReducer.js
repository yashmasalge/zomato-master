import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer"

const roootReducer = combineReducers({restaurant});

export default roootReducer;