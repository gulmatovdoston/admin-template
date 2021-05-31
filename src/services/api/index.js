import axios from "axios";
import _ from "lodash";
import { API_BASE_URL } from "configs/AppConfig";
import { logout, refreshAccessToken } from "../../redux/actions";

let isAlreadyFetchingAccessToken = false;
let subscribers = [];
const config = {};
config.URL = API_BASE_URL;

const onAccessTokenFetched = (access_token) => {
  subscribers = subscribers.filter((callback) => callback(access_token));
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

const request = axios.create({
  baseURL: config.URL,
});

const subscribe = (store) => {
  request.interceptors.request.use((config) => {
    let state = store.getState();
    const { accessToken } = state && state.auth;
    config.headers["Timezone"] = new Date().getTimezoneOffset() * -60;
    if (accessToken) {
      config.headers["Authorization"] = [accessToken].join(" ");
    }
    return config;
  });

  request.interceptors.response.use(
    (config) => config,
    (error) => {
      let state = store.getState();
      const { refreshToken } = state && state.auth;
      const {
        config,
        response: { status },
      } = error;
      const originalRequest = config;
      if (status === 403) {
        store.dispatch(logout());
        throw error;
      }
      if (status === 401) {
        if (config && config.url === "/v1/login/") {
        }
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          refToken(refreshToken)
            .then((access_token, error) => {
              isAlreadyFetchingAccessToken = false;
              onAccessTokenFetched(access_token);
            })
            .catch(() => {
              store.dispatch(logout());
            });
        }
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((res, err) => {
            const newToken = _.get(res, ["data", "access_token"]);

            store.dispatch(refreshAccessToken(newToken));
            originalRequest.headers.Authorization = newToken;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest.catch();
      }
      throw error;
    }
  );
};

const refToken = (refreshToken) => {
  return request.post("/v1/login/", {
    refresh: refreshToken,
  });
};

export default { request, subscribe };
export { request };
