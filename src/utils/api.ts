import { PROFILE_ENDPOINT, checkResponse } from "./BaseURL";
import { POST_REGISTER_ENDPOINT } from "./BaseURL";
import { POST_PASSWORD_RESET_ENDPOINT } from "./BaseURL";
import { POST_RESET_ENDPOINT } from "./BaseURL";
import { setUser } from "../services/actions/userActions";
import { fetchWithRefresh } from "./reset-api";
import { AppThunk } from "../types/thunk";
import { TRegistration } from "../types/token";

export const Register = (name:string, pass:string, email:string) => {
  return fetch(POST_REGISTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: pass,
      name: name,
    }),
  })
    .then(checkResponse<TRegistration>)
    .then((res) => {
      // Сохраняем accessToken и refreshToken в localStorage
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const forgotPassword = (email:string) => {
  return fetch(POST_PASSWORD_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => checkResponse(res));
};

export function postApiResetPassword(email:string) {
  forgotPassword(email)
    .then((res) => {
      console.log(res);
      localStorage.setItem("resetPasswordFlag", String(true));
    })
    .catch((err) => {
      console.log(err);
    });
}

export const resetPassword = (newPassword:string, token:string) => {
  return fetch(POST_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: newPassword,
      token: token,
    }),
  }).then((res) => checkResponse(res));
};

export function postApiReset(newPassword:string, token:string) {
  resetPassword(newPassword, token)
    .then((res) => {
      console.log(res);
      localStorage.removeItem("resetPasswordFlag");
    })
    .catch((err) => {
      console.log(err);
    });
}

//6. Обновление данных пользователя.

export const updateUser = (email:string, name:string, password:string):AppThunk => {
  return (dispatch) => {
    return fetchWithRefresh(PROFILE_ENDPOINT, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((res) => {
      console.log("resUpd", res);
      dispatch(setUser(res.user));
    });
  };
};
