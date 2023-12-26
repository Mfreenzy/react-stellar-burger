import { TIngredient } from "../../types/types";
import {
  SET_INGREDIENT_DETAILS,
  CLEAR_INGREDIENT_DETAILS,
  TCurrentIngredientActions,
} from "../actions/currentIngredientActions";

type TIngredientDetailState = {
  details : null | TIngredient
}

const initialState: TIngredientDetailState = {
  details: null,
};

const ingredientDetailsReducer = (state = initialState, action: TCurrentIngredientActions):TIngredientDetailState => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case CLEAR_INGREDIENT_DETAILS:
      return {
        ...state,
        details: null,
      };
    default:
      return state;
  }
}

export default ingredientDetailsReducer;
