import { AppThunk } from "../../types/thunk";
import { TUser } from "../../types/types";
import { tokens } from "../../utils/tokens";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";
export const SET_USER_ERROR = "SET_USER_ERROR"


export type setAuthCheckedActions = {
  type: typeof SET_AUTH_CHECKED,
  payload: boolean
}

export type setUserAction = {
  type: typeof SET_USER,
  payload: TUser | null;
}


export type TUserAction = 
    | setAuthCheckedActions
    | setUserAction

export const setAuthChecked = (value:boolean):setAuthCheckedActions => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user:null | TUser):setUserAction => ({
  type: SET_USER,
  payload: user,
});

export const getUser = (): AppThunk<Promise<unknown>> => {
  return (dispatch) => {
    return tokens.getUser()
      .then((res) => {
        dispatch(setUser(res.user));
      })
      .catch((error) => {
        // Handle the error, for example:
        console.error("Error fetching user:", error);
        // Optionally dispatch an error action
        // dispatch(userFetchError(error));
      });
  };
};

export const login = (email: string, pass: string): AppThunk<Promise<unknown>> => {
  return (dispatch) => {
    return tokens.login(email, pass)
      .then((res) => {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch(setUser(res.user));
        dispatch(setAuthChecked(true));
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Error:", error);
        // Дополнительные действия при возникновении ошибки
      });
  };
};

export const logout = (): AppThunk<Promise<unknown>> => {
  return (dispatch) => {
    return tokens.logout()
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Error:", error);
        // Дополнительные действия при возникновении ошибки
      });
  };
};


export const checkUserAuth = (): AppThunk => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .then(() => {
          // handle successful getUser() dispatch
        })
        .catch((error) => {
          // handle error from getUser() dispatch
          console.error("Error fetching user:", error);
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



