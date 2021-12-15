import axios from 'axios';

// redux types
import { GET_RESTAURANT } from './restaurant.type';

export const getRestaurant = () => async(dispatch) => {
    try{
        const restaurantList = await axios({
            method: "GET",
            url: "http://localhost:5000/restaurant/?city=mumbai"
        });

        return dispatch({type : GET_RESTAURANT, payload: restaurantList.data});
    }
    catch(error){
        return dispatch({type : "Error", payload: error});
    }
}