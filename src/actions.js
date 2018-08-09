export const logout = () => ({
  type: "LOGOUT"
})

export const authHeaderRecv = (payload) => ({
  type: "AUTH_HEADER_RECV",
  payload
});
