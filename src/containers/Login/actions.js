export const loginSubmit = () => ({
  type: "LOGIN_SUBMIT"
});

export const loginSuccess = payload => ({
  type: "LOGIN_SUCCESS",
  payload
});

export const loginFailure = payload => ({
  type: "LOGIN_FAILURE",
  payload
});
