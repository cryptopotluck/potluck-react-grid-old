import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { keys } from "lodash";

import loginPage from "./containers/Login/reducer";
import signupPage from "./containers/Signup/reducer";

const initialState = {
  authHeader: null,
  authenticated: false,
  users: null,
  userId: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "AUTH_HEADER_RECV":
      return {
        ...state,
        authHeader: payload
      };

    case "LOGOUT":
      return {
        ...state,
        users: null,
        userId: null,
        authenticated: false,
        authHeader: null
      };

    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        users: payload.users,
        userId: keys(payload.users)[0],
        authenticated: true
      };

    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        ...state,
        users: null,
        userId: null,
        authenticated: false,
        authHeader: null
      };

    default:
      return state;
  }
};

export default combineReducers({
  app: reducer,
  form: formReducer,
  loginPage,
  signupPage
});
