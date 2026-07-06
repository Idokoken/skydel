import { createContext, useReducer } from "react";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
} from "./action";
import { Data } from "../config/data";
import axios from "axios";
import { api, BASE_URL } from "../config/API";
import { reducer } from "./Reducer";

// export const user = localStorage.getItem("user");
// const token = localStorage.getItem("token");

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer);
  const currency = "$";
  const delivery_fee = 10;

  //   const addUserToLocalStorage = ({ user, token }) => {
  //     localStorage.setItem("user", JSON.stringify(user));
  //     localStorage.setItem("token", token);
  //   };

  //   const removeUserRemoveLocalStorage = () => {
  //     localStorage.removeItem("user");
  //     localStorage.removeItem("token");
  //   };

  //   ------Register User-----
  const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/signup`,
        reqData.userData,
      );
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      if (data.role == "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("/admin/restaurant");
      } else {
        reqData.navigate("/");
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
        console.log("registeration successful", data);
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };
  //   -----Login User ----
  const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/signin`,
        reqData.userData,
      );
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      if (data.role == "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("/admin/restaurant");
      } else {
        reqData.navigate("/");
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        console.log("user logged in", data);
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Get User Profile -----
  const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await API.get(`/auth/signin`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      dispatch({ type: GET_USER_SUCCESS, payload: data });
      console.log("user profile", data);
    } catch (error) {
      dispatch({
        type: GET_USER_FAILURE,
        payload: error,
      });
      console.log(error);
    }
  };

  //   ----- Add to Favorite ----
  const addToFavorite =
    ({ jwt, restaurntId }) =>
    async (dispatch) => {
      dispatch({ type: ADD_TO_FAVORITE_REQUEST });
      try {
        const { data } = await api.put(
          `${BASE_URL}/api/restaurants/${restaurntId}/add-favorites`,
          {},
          {
            headers: { Authorization: `Bearer ${jwt}` },
          },
        );
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
        console.log("add to favorite", data);
      } catch (error) {
        dispatch({
          type: ADD_TO_FAVORITE_FAILURE,
          payload: error,
        });
        console.log(error);
      }
    };

  // -----Logout User-----
  const logoutUser = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    // localStorage.removeItem("jwt");
    localStorage.clear();
    console.log("usser logged out");
  };

  const value = {
    ...state,
    products: Data,
    currency,
    delivery_fee,
    registerUser,
    loginUser,
    loginUser,
    getUser,
    addToFavorite,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
