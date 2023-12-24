import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../../types/types';
export const ADD_CURRENT_BUN = "ADD_CURRENT_BUN";
export const ADD_CURRENT_INGREDIENT = "ADD_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT = "REMOVE_CURRENT_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENTS = "CLEAR_CURRENT_INGREDIENTS";
export const MOVE_FILLING = "MOVE_FILLING"

export type AddCurrentBunAction = {
  type: typeof ADD_CURRENT_BUN;
  payload: TIngredient;
};

export type AddCurrentIngredientAction = {
  type: typeof ADD_CURRENT_INGREDIENT;
  payload: TIngredient;
};

export type RemoveCurrentIngredientAction = {
  type: typeof REMOVE_CURRENT_INGREDIENT;
  payload: TIngredient;
};

export type ClearCurrentIngredientsAction = {
  type: typeof CLEAR_CURRENT_INGREDIENTS;
};

export type MoveFillingAction = {
  type: typeof MOVE_FILLING;
  payload: { dragIndex: number, hoverIndex: number };
};


export type TCurrentIngredientsActions = 
    | AddCurrentBunAction
    | AddCurrentIngredientAction
    | RemoveCurrentIngredientAction
    | ClearCurrentIngredientsAction
    | MoveFillingAction


export const addCurrentBun = (ingredient:TIngredient):AddCurrentBunAction => {
  return {
    type: ADD_CURRENT_BUN,
    payload: ingredient,
  };
};

export const addCurrentIngredient = (ingredient:TIngredient):AddCurrentIngredientAction => {
  const newIngredient = { ...ingredient, key: uuidv4() };
  return {
    type: ADD_CURRENT_INGREDIENT,
    payload: newIngredient,
  };
};

export const removeCurrentIngredient = (ingredient:TIngredient):RemoveCurrentIngredientAction => {
  return {
    type: REMOVE_CURRENT_INGREDIENT,
    payload: ingredient,
  };
};

export const clearCurrentIngredients = (): ClearCurrentIngredientsAction => {
  return {
    type: CLEAR_CURRENT_INGREDIENTS,
  };
};

export function moveFilling(dragIndex: number, hoverIndex: number):MoveFillingAction {
  return {type: MOVE_FILLING, payload: { dragIndex, hoverIndex }}
}