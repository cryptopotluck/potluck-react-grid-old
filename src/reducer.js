import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  app: reducer,
  form: formReducer
});
