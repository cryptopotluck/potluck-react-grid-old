export const forgotSubmit = () => ({
  type: "FORGOT_SUBMIT"
});

export const forgotSuccess = payload => ({
  type: "FORGOT_SUCCESS",
  payload
});

export const forgotFailure = payload => ({
  type: "FORGOT_FAILURE",
  payload
});
