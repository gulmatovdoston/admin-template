import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import storage from "redux-persist/lib/storage";

import { CLEAR_ON_SIGNOUT } from "../constants";

const appReducer = combineReducers({
  auth: Auth,
  theme: Theme,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_ON_SIGNOUT) {
    storage.removeItem("persist:waterCooler");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
