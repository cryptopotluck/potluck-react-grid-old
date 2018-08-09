const initialState = {
  loading: false,
  errors: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUBMIT":
      return {
        ...state,
        loading: true,
        errors: null
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        errors: null
      };

    case "LOGIN_FAILURE":
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
