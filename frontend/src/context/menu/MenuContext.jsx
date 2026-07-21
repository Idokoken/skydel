import { createContext, useReducer } from "react";
import {
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  CREATE_MENU_ITEM_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
} from "./MenuActions";
import { initialState, MenuReducer } from "./MenuReducer";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  //   .....Create Menu Item.....
  const createMenuItem = async ({ menu, jwt }) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/food`, menu, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
      console.log("Food menu created successfully", data);
    } catch (error) {
      dispatch({
        type: CREATE_MENU_ITEM_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   .....Get Menu Item By Restaurant ID.....
  const getMenuItemsByRestaurantId = async ({ reqData }) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/foods/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
        &nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
        {
          headers: { Authorization: `Bearer ${reqData.jwt}` },
        },
      );
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: data,
      });
      console.log("Food menu items by restaurant", data);
    } catch (error) {
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   .....Search Menu Item.....
  const searchMenuItem = async ({ keyword, jwt }) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.get(`/api/foods/search?name=${keyword}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch({
        type: SEARCH_MENU_ITEM_SUCCESS,
        payload: data,
      });
      console.log("Data ...", data);
    } catch (error) {
      dispatch({
        type: SEARCH_MENU_ITEM_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   .....Update Food Menu Item Availability.....
  const updateMenuItemsAvailability = async ({ foodId, jwt }) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/food/${foodId}/status`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );
      dispatch({
        type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
        payload: data,
      });
      console.log("Updated Menu Item Availablity", data);
    } catch (error) {
      dispatch({
        type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   .....Delete Food Items.....
  const deleteFoodAction = async ({ foodId, jwt }) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.delete(
        `/api/admin/food/${foodId}/status`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );
      dispatch({
        type: DELETE_MENU_ITEM_SUCCESS,
        payload: foodId,
      });
      console.log("food deleted", data);
    } catch (error) {
      dispatch({
        type: DELETE_MENU_ITEM_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  const value = {
    ...state,
    createMenuItem,
    getMenuItemsByRestaurantId,
    searchMenuItem,
    updateMenuItemsAvailability,
    deleteFoodAction,
  };

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
