import { tokens } from "../../utils/tokens";
import { POST_LOGOUT_ENDPOINT } from "../../utils/BaseURL";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUser = () => {
  return (dispatch) => {
    return tokens.getUser().then((res) => {
      dispatch(setUser(res.user));
    });
  };
};

export const login = () => {
  return (dispatch) => {
    return tokens.login().then((res) => {
      localStorage.setItem("accessToken");
      localStorage.setItem("refreshToken");
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

