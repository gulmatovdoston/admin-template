import {
  CLEAR_ON_SIGNOUT,
  REFRESH_ACCESS_TOKEN,
  SET_AUTH_CREDENTIALS,
  SET_AUTH_TOKENS,
} from "../constants/Auth";

const INITIAL_STATE = {
  email: "",
  position: "",
  accessToken: "",
  refreshToken: "",
  admin_id: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_CREDENTIALS:
      return {
        ...state,
        email: action.payload.email,
        position: action.payload.position,
        admin_id: action.payload.admin_id,
      };
    case SET_AUTH_TOKENS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case REFRESH_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case CLEAR_ON_SIGNOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
