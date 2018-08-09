import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import loginPage from "./containers/Login/reducer";

const initialState = {
  authenticated: false,
  users: null,
  authHeader: null
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
        authenticated: false,
        authHeader: null
      }

    case "LOGIN_SUCCESS":
      return {
        ...state,
        users: payload.users,
        authenticated: true
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
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
  loginPage
});
