import request from "../request";

export const login = (
  email,
  password,
  loadingAction,
  successAction,
  failureAction
) =>
  request(
    "users/sign_in",
    {
      method: "POST",
      body: { user: { email, password } }
    },
    loadingAction,
    successAction,
    failureAction
  );
