export const signupSubmit = () => ({
  type: "SIGNUP_SUBMIT"
});

export const signupSuccess = payload => ({
  type: "SIGNUP_SUCCESS",
  payload
});

export const signupFailure = payload => ({
  type: "SIGNUP_FAILURE",
  payload
});
