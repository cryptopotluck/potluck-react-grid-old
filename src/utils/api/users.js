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
