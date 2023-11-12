import { PROFILE_ENDPOINT, checkResponse } from "./BaseURL";
import { POST_REGISTER_ENDPOINT } from "./BaseURL";
import { POST_LOGIN_ENDPOINT } from "./BaseURL";
import { POST_LOGOUT_ENDPOINT } from "./BaseURL";
import { POST_PASSWORD_RESET_ENDPOINT } from "./BaseURL";
import { POST_RESET_ENDPOINT } from "./BaseURL";
import { setUser } from "../services/actions/userActions";
import { fetchWithRefresh } from "./reset-api";



export const Register = (name, pass, email) => {
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
    .then((res) => {
      // Проверка ответа
      checkResponse(res);
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

//2. Запрос Login
export const Login = (email, pass) => {
  const requestBody = {
    email: email,
    password: pass,
  };

  fetch(POST_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => checkResponse(res)) // используем функцию checkResponse для проверки ответа
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};


//3. Запрос Logout

export const logout = () => {
  return (dispatch) => {
    const refreshToken = localStorage.getItem("refreshToken");

    const data = {
      token: refreshToken,
    };

    return fetch(POST_LOGOUT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//4. Запрос на восстановление пароля

export const forgotPassword = (email) => {
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

export function postApiResetPassword(email) {
  forgotPassword(email)
    .then((res) => {
      console.log(res);
      localStorage.setItem("resetPasswordFlag", true);
    })
    .catch((err) => {
      console.log(err);
    });
}

//5. Запрос на изменение пароля, при получения токена восстановления.

export const resetPassword = (newPassword, token) => {
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

export function postApiReset(newPassword, token) {
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

export const updateUser = (email, name, password) => {
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

//7. Получение данных пользователя.
export const getUser = () => {
  return (dispatch) => {
    return fetchWithRefresh(PROFILE_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      dispatch(setUser(res.user));
    });
  };
};
