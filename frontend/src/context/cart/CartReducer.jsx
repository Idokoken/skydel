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

export const initialState = {};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CART_REQUEST:
    case CLEAR_CART_REQUEST:
    case GET_ALL_CART_ITEMS_REQUEST:
    case ADD_ITEM_TO_CART_REQUEST:
    case UPDATE_CARTITEM_REQUEST:
    case REMOVE_CARTITEM_REQUEST:
      return {
        loading: true,
      };

    case FIND_CART_SUCCESS:
      return { loading: false };

    case FIND_CART_FAILURE:
    case CLEAR_CART_FAILURE:
    case GET_ALL_CART_ITEMS_FAILURE:
    case ADD_ITEM_TO_CART_FAILURE:
    case UPDATE_CARTITEM_FAILURE:
    case REMOVE_CARTITEM_FAILURE:
      return { loading: false };

    default:
      return state;
  }
};
