import { TIngredient } from "../../types/types";

export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const CLEAR_INGREDIENT_DETAILS = 'CLEAR_INGREDIENT_DETAILS';

export interface SetIngredientDetailsAction {
  type: typeof SET_INGREDIENT_DETAILS;
  payload: TIngredient; // замените string на тип данных ingredient, если он отличается
}

export interface ClearIngredientDetailsAction {
  type: typeof CLEAR_INGREDIENT_DETAILS;
}


export type TCurrentIngredientActions = 
    | SetIngredientDetailsAction
    | ClearIngredientDetailsAction


export function setIngredientDetails(ingredient: TIngredient): SetIngredientDetailsAction {
  return {
    type: SET_INGREDIENT_DETAILS,
    payload: ingredient,
  }
}

export function clearIngredientDetails(): ClearIngredientDetailsAction {
  return {
    type: CLEAR_INGREDIENT_DETAILS,
  }
}