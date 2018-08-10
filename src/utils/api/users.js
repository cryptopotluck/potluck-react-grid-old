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

export const signup = (
  email,
  discordId,
  password,
  loadingAction,
  successAction,
  failureAction
) =>
  request(
    "users",
    {
      method: "POST",
      body: { user: { email, password, discord_id: discordId } }
    },
    loadingAction,
    successAction,
    failureAction
  );

export const requestResetPassword = (
  email,
  loadingAction,
  successAction,
  failureAction
) =>
  request(
    "users/password",
    {
      method: "POST",
      body: { user: { email } }
    },
    loadingAction,
    successAction,
    failureAction
  );

export const resetPassword = (
  password,
  token,
  loadingAction,
  successAction,
  failureAction
) =>
  request(
    "users/password",
    {
      method: "PUT",
      body: { user: { password, reset_password_token: token } }
    },
    loadingAction,
    successAction,
    failureAction
  );
