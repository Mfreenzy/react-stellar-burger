import { TGetUser, TRegistration } from "../types/token";
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
  const accessToken: string | null = localStorage.getItem("accessToken");
  return fetch(PROFILE_ENDPOINT, { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken!,
    },
  }).then(checkResponse<TGetUser>);
};

const login = (email:string, pass:string): Promise<TRegistration> => {
  return fetch(POST_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: pass }),
  }).then(checkResponse<TRegistration>);
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
