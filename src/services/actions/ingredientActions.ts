import { AppThunk } from "../../types/thunk";
import { TIngredient } from "../../types/types";
import { GET_INGREDIENTS_ENDPOINT } from "../../utils/BaseURL";
import { checkResponse } from "../../utils/BaseURL";


export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

export interface fetchIngredientsSuccessAction {
  type: typeof FETCH_INGREDIENTS_SUCCESS;
  payload: TIngredient[];
}

export interface fetchIngredientsFailedAction {
  type: typeof FETCH_INGREDIENTS_FAILURE;
}

export interface fetchIngredientsRequestAction {
  type: typeof FETCH_INGREDIENTS_REQUEST;

}
 
export type TIngredientActions = 
    | fetchIngredientsSuccessAction
    | fetchIngredientsFailedAction
    | fetchIngredientsRequestAction

export function fetchIngredientsSuccess(data:TIngredient[]):fetchIngredientsSuccessAction {
  return {
    type: FETCH_INGREDIENTS_SUCCESS,
    payload: data,
  };
}

export function fetchIngredientsFailed():fetchIngredientsFailedAction {
  return {
    type: FETCH_INGREDIENTS_FAILURE,
  };
}

export function fetchIngredientsRequest():fetchIngredientsRequestAction {
  return {
    type: FETCH_INGREDIENTS_REQUEST,
  };
}

export const getBurgerIngredients = ():AppThunk => {
  return (dispatch) => {
    dispatch(fetchIngredientsRequest());
    fetch(GET_INGREDIENTS_ENDPOINT)
      .then((res) => checkResponse(res))
      .then((data) => {
        console.log(data);
        dispatch(fetchIngredientsSuccess(data.data));
      })
      .catch(() => {
        dispatch(fetchIngredientsFailed());
      });
  };
}
