import { createContext, useReducer } from "react";
import {
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  FIND_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
  GET_ALL_CART_ITEMS_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  UPDATE_CARTITEM_REQUEST,
  UPDATE_CARTITEM_SUCCESS,
  UPDATE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
} from "./CartActions";
import { CartReducer, initialState } from "./CartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const value = {};

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
