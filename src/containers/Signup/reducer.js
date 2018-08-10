const initialState = {
  loading: false,
  errors: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_SUBMIT":
      return {
        ...state,
        loading: true,
        errors: null
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        errors: null
      };

    case "SIGNUP_FAILURE":
      return {
        ...state,
        loading: false,
        errors: payload.errors
      };

    default:
      return state;
  }
};

export default reducer;
