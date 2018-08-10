const initialState = {
  loading: false,
  errors: null,
  success: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FORGOT_SUBMIT":
      return {
        ...state,
        loading: true,
        errors: null,
        success: false
      };

    case "FORGOT_SUCCESS":
      return {
        ...state,
        loading: false,
        errors: null,
        success: true
      };

    case "FORGOT_FAILURE":
      return {
        ...state,
        loading: false,
        success: false,
        errors: payload.errors
      };

    default:
      return state;
  }
};

export default reducer;
