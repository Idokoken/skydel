import { createContext, useReducer } from "react";
import { RestaurantReducer, initialState } from "./RestaurantReducer";
import axios from "axios";
import { api, BASE_URL } from "../../config/API";
import {
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_ALL_RESTAURANTS_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  GET_RESTAURANTS_EVENTS_REQUEST,
  GET_RESTAURANTS_EVENTS_SUCCESS,
  GET_RESTAURANTS_EVENTS_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
} from "./RestaurantActions";

export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  //   ----- Get All Restaurants -----
  const getAllRestaurants = async (token) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
    try {
      const { data } = await api.get(`/api/restaurants/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
      // console.log("All Restaurants", data);
    } catch (error) {
      dispatch({
        type: GET_ALL_RESTAURANTS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get Restaurants By ID-----
  const getRestaurantById = async (reqData) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/restaurants/${reqData.id}`, {
        headers: { Authorization: `Bearer ${reqData.jwt}` },
      });

      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
      console.log("Get Restaurant by ID", data);
    } catch (error) {
      dispatch({
        type: GET_RESTAURANT_BY_ID_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Create Restaurants -----
  const CreateRestaurant = async (reqData) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
        headers: { Authorization: `Bearer ${reqData.token}` },
      });

      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("Restaurant ceated successfully", data);
    } catch (error) {
      dispatch({
        type: CREATE_RESTAURANT_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Update Restaurants -----
  const UpdateRestaurant = async ({ id, reqData, jwt }) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/restaurants/${id}`, reqData, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data });
      console.log("Restaurant updated successfully", data);
    } catch (error) {
      dispatch({
        type: UPDATE_RESTAURANT_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Delete Restaurants -----
  const DeleteRestaurant = async ({ id, jwt }) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      await api.delete(`/api/admin/restaurants/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: id });
      console.log("Restaurant delete sduccessfully");
    } catch (error) {
      dispatch({
        type: DELETE_RESTAURANT_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Update Restaurant Status-----
  const UpdateRestaurantStatus = async ({ id, jwt }) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/restaurants/${id}/status`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );
      dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data });
      console.log("Restaurant updated successfully", data);
    } catch (error) {
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Create Event Action -----
  const CreateEventAction = async ({ data, jwt, id }) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const resp = await api.post(`/api/admin/events/restaurants/${id}`, data, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: resp.data });
      console.log("Event Action Created successfully", resp.data);
    } catch (error) {
      dispatch({
        type: CREATE_EVENTS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get All Event Action -----
  const getAllEvent = async ({ jwt }) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const resp = await api.get(`/api/events`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: resp.data });
      console.log("Get All Events", resp.data);
    } catch (error) {
      dispatch({
        type: GET_ALL_EVENTS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Delete Event Action -----
  const deleteEventAction = async ({ id, jwt }) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      const resp = await api.delete(`/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: id });
      console.log("Event deleted", resp.data);
    } catch (error) {
      dispatch({
        type: DELETE_EVENTS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get Restaurants Event -----
  const getRestaurantsEvent = async ({ id, jwt }) => {
    dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
    try {
      const resp = await api.get(`/api/admin/events/restaurants/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: resp.data });
      console.log("Get All Events", resp.data);
    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_EVENTS_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Create Category Action -----
  const CreateCategoryAction = async ({ data, jwt }) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const resp = await api.post(`/api/admin/category`, data, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: resp.data });
      console.log("Category Created successfully", resp.data);
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get Restaurants Category -----
  const GetRestaurantsCategory = async ({ jwt, id }) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    try {
      const resp = await api.get(`/api/category/restaurant/${id}`, data, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: resp.data });
      console.log("Get Restaurant Category", resp.data);
    } catch (error) {
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  const value = {
    ...state,
    getAllRestaurants,
    getRestaurantById,
    CreateRestaurant,
    UpdateRestaurant,
    DeleteRestaurant,
    CreateEventAction,
    UpdateRestaurantStatus,
    CreateEventAction,
    getAllEvent,
    deleteEventAction,
    getRestaurantsEvent,
    CreateCategoryAction,
    GetRestaurantsCategory,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
