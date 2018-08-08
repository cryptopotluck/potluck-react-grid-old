import normalize from "json-api-normalizer";

const BASE_URI = "/api/v1/";

const handleFailure = (dispatch, action) => {
  return err => {
    if (action) {
      let payload = err;
      if (!payload.errors) payload = { errors: err };

      dispatch(action(payload));
    }
  };
};

const request = (
  url,
  opts = {},
  loadingAction,
  successAction,
  failureAction
) => dispatch => {
  loadingAction && dispatch(loadingAction());

  fetch(`${BASE_URI}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...opts
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) throw res;
      return res;
    })
    .then(normalize)
    .then(res => successAction && dispatch(successAction(res)))
    .catch(handleFailure(dispatch, failureAction));
};

export default request;
