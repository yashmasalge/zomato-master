
// redux
import {
    GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCRETE_QUANTITY,
    DECRETE_QUANTITY
} from "./cart.type";

// GET_CART
export const getCart = () => async (dispatch) => {
    try {
      let cartData = { cart: [] };
  
      if (localStorage.zomatoCart) {
        const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
        cartData.cart = cart;
      }
  
      return dispatch({ type: GET_CART, payload: cartData.cart });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

// ADD_TO_CART
export const addToCart = (newFood) => async (dispatch) => {
    try {
      let cartData = { cart: [] };
  
      if (localStorage.zomatoCart) {
        const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
        cartData.cart = cart;
      }
  
      cartData.cart.push(newFood);
  
      localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
  
      return dispatch({ type: ADD_TO_CART, payload: cartData.cart });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

// DELETE_FROM_CART
export const deleteCart = (foodId) => async (dispatch) => {
    try {
      let cartData = { cart: [] };
  
      if (localStorage.zomatoCart) {
        const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
        cartData.cart = cart;
      }
  
      if (!cartData.cart.length) {
        return dispatch({ type: "ERROR", payload: "Cart is empty" });
      }
  
      cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId);
  
      localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
  
      return dispatch({ type: DELETE_FROM_CART, payload: cartData.cart });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

// INCRETE_QUANTITY
export const increteQuantity = (foodId) => async (dispatch) => {
    try {
      let cartData = { cart: [] };
  
      if (localStorage.zomatoCart) {
        const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
        cartData.cart = cart;
      }
  
      cartData.cart = cartData.cart.map((food) =>
        food._id === foodId
          ? {
              ...food,
              quantity: food.quantity + 1,
              totalPrice: food.price * (food.quantity + 1),
            }
          : food
      );
  
      localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
  
      return dispatch({ type: INCRETE_QUANTITY, payload: cartData.cart });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

// DECRETE_QUANTITY
export const decreteQuantity = (foodId) => async (dispatch) => {
    try {
      let cartData = { cart: [] };
  
      if (localStorage.zomatoCart) {
        const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
        cartData.cart = cart;
      }
  
      cartData.cart = cartData.cart.map((food) =>
        food._id === foodId
          ? {
              ...food,
              quantity: food.quantity - 1,
              totalPrice: food.price * (food.quantity - 1),
            }
          : food
      );
  
      localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));
  
      return dispatch({ type: DECRETE_QUANTITY, payload: cartData.cart });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };