import { BASE_URL } from "../../utils/BaseURL";
import { checkResponse } from "../../utils/BaseURL";

export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";
export const CLEAR_CURRENT_ORDER = "CLEAR_CURRENT_ORDER";
export const SET_CURRENT_ORDER_ERROR = "SET_CURRENT_ORDER_ERROR";

export function setCurrent(ingredient) {
  return {
    type: SET_CURRENT_ORDER,
    payload: ingredient,
  };
}

export function clearCurrentOrder() {
  return {
    type: CLEAR_CURRENT_ORDER,
  };
}

export function getCurrentOrder(number) {
  console.log(number);
  return function (dispatch) {
    return fetch(`${BASE_URL}/orders/${number}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        dispatch(setCurrent(res));
      })
      .catch((error) => {
        dispatch({
          type: SET_CURRENT_ORDER_ERROR,
          payload: error.message,
        });
      });
  };
}
