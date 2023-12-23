import {
  PROFILE_ENDPOINT,
  POST_LOGIN_ENDPOINT,
  POST_LOGOUT_ENDPOINT,
  checkResponse,
} from "./BaseURL";
import { fetchWithRefresh } from "./reset-api";

// В проектной работе эта функция будет обращаться к серверу
// и обновлять токены если они уже устарели.
const getUser = () => {
  return fetch(PROFILE_ENDPOINT, { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
  }).then((res) => checkResponse(res));
};

const login = (email, pass) => {
  return fetch(POST_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: pass }),
  }).then((res) => checkResponse(res));
};

const logout = () => {
  return fetchWithRefresh(POST_LOGOUT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token: localStorage.getItem("refreshToken")}),
  })
};

export const tokens = {
  getUser,
  login,
  logout,
};
