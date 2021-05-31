import {
  CLEAR_ON_SIGNOUT,
  REFRESH_ACCESS_TOKEN,
  SET_AUTH_TOKENS,
  SET_AUTH_CREDENTIALS,
} from "../constants/Auth";

export const setAuthTokens = (data) => ({
  type: SET_AUTH_TOKENS,
  payload: {
    accessToken: data && data.access_token,
    refreshToken: data && data.refresh_token,
  },
});

export const refreshAccessToken = (token) => ({
  type: REFRESH_ACCESS_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: CLEAR_ON_SIGNOUT,
});

export const setAuthCredentials = (data) => ({
  type: SET_AUTH_CREDENTIALS,
  payload: {
    email: data.email,
    position: data.position,
    admin_id: data.id,
  },
});
