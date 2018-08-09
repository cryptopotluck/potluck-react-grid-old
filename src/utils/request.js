import normalize from "json-api-normalizer";

import config from "../config";
import { authHeaderRecv } from "../actions";

const BASE_URI = `${config.api_domain}/api/v1/`;
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  credentials: "include",
  mode: "cors"
};

const handleFailure = (dispatch, action) => {
  return err => {
    if (action) {
      let payload = err;

      if (payload.error) {
        payload.errors = [payload.error];
        payload.error = undefined;
      }

      if (!payload.errors) payload = { errors: err };

      dispatch(action(payload));
    }
  };
};

const handleResponse = (res, dispatch) => {
  const json = res.json(),
    authHeader = res.headers.get("Authorization");

  if (authHeader) {
    dispatch(authHeaderRecv(authHeader));
  }

  return json;
};

const getHeaders = state => {
  const extraHeaders = {};

  if (state.app.authHeader) {
    extraHeaders["Authorization"] = state.app.authHeader;
  }

  return {
    ...DEFAULT_HEADERS,
    ...extraHeaders
  };
};

const request = (
  url,
  opts = {},
  loadingAction,
  successAction,
  failureAction
) => (dispatch, getState) => {
  const state = getState();

  loadingAction && dispatch(loadingAction());

  if (opts.body) opts.body = JSON.stringify(opts.body);

  fetch(`${BASE_URI}${url}`, {
    headers: getHeaders(state),
    ...opts
  })
    .then(res => handleResponse(res, dispatch))
    .then(res => {
      if (res.errors || res.error) throw res;
      return res;
    })
    .then(normalize)
    .then(res => successAction && dispatch(successAction(res)))
    .catch(handleFailure(dispatch, failureAction));
};

export default request;
