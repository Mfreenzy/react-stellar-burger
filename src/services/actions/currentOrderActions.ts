import { TOrder } from "../../types/types";
import { BASE_URL } from "../../utils/BaseURL";
import { checkResponse } from "../../utils/BaseURL";
import { AppThunk } from "../../types/thunk";

export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";
export const CLEAR_CURRENT_ORDER = "CLEAR_CURRENT_ORDER";
export const SET_CURRENT_ORDER_ERROR = "SET_CURRENT_ORDER_ERROR";

export type SetCurrentOrderAction = {
  type: typeof SET_CURRENT_ORDER;
  payload: TOrder;
}

export type ClearCurrentOrderAction = {
  type: typeof CLEAR_CURRENT_ORDER;
}

export type SetCurrentOrderErrorAction = {
  type: typeof SET_CURRENT_ORDER_ERROR;
  payload: string;
}

export type TCurrentOrderActions = 
    | SetCurrentOrderAction
    | ClearCurrentOrderAction
    | SetCurrentOrderErrorAction


export function setCurrent(order: TOrder): SetCurrentOrderAction {
  return {
    type: SET_CURRENT_ORDER,
    payload: order,
  };
}

export function clearCurrentOrder(): ClearCurrentOrderAction {
  return {
    type: CLEAR_CURRENT_ORDER,
  };
}

export const getCurrentOrder = (number:number):AppThunk => {
  console.log(number);
  return (dispatch) => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    return fetch(`${BASE_URL}/orders/${number}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken!,
      },
    })
      .then(checkResponse<TOrder>)
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
