import { AppThunk } from "../../types/thunk";
import { OrderResponse } from "../../types/types";
import { POST_ORDERS_ENDPOINT } from "../../utils/BaseURL";
import { checkResponse } from "../../utils/BaseURL";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILURE = "POST_ORDER_FAILURE";
export const RESET_ORDER = "RESET_ORDER";

export type postOrderSuccessAction = {
  type: typeof POST_ORDER_SUCCESS,
  payload:number
}

export type postOrderFailureAction = {
  type: typeof POST_ORDER_FAILURE
}

export type postOrderRequestAction = {
  type: typeof POST_ORDER_REQUEST
}

export type resetOrderAction = {
  type: typeof RESET_ORDER
}


export type TOrderActions = 
    | postOrderSuccessAction
    | postOrderFailureAction
    | postOrderRequestAction
    | resetOrderAction


export function postOrderSuccess(orderNumber:number):postOrderSuccessAction {
  return {
    type: POST_ORDER_SUCCESS,
    payload: orderNumber,
  };
}

export function postOrderFailure():postOrderFailureAction {
  return {
    type: POST_ORDER_FAILURE,
  };
}

export function postOrderRequest():postOrderRequestAction {
  return {
    type: POST_ORDER_REQUEST,
  };
}

export function resetOrder():resetOrderAction {
  return {
    type: RESET_ORDER,
  };
}


export const getBurgerOrder = (data:string[]):AppThunk => {
  console.log(data);
  return (dispatch) => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    dispatch(postOrderRequest());
    fetch(POST_ORDERS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken!
      },
      body: JSON.stringify({ ingredients: data }),
    })
      .then(checkResponse<OrderResponse>)
      .then((data) => {
        const orderNumber = data.order.number; // Получаем только номер заказа
        console.log(orderNumber)
        dispatch(postOrderSuccess(orderNumber));
      })
      .catch(() => {
        dispatch(postOrderFailure());
      });
  };
}
