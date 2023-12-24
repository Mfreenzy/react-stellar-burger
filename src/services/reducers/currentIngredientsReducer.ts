import { TIngredient } from "../../types/types";
import {
  ADD_CURRENT_BUN,
  ADD_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENTS,
  MOVE_FILLING,
  TCurrentIngredientsActions,
} from "../actions/currentIngredientsActions";

type TConstructorState = {
  bun: TIngredient | null;
  other: TIngredient[];
};

const initialState: TConstructorState = { bun: null, other: [] };

const currentIngredientsReducer = (
  state = initialState,
  action: TCurrentIngredientsActions
): TConstructorState => {
  switch (action.type) {
    case ADD_CURRENT_BUN:
      return {
        ...state,
        bun: action.payload,
      };
    case ADD_CURRENT_INGREDIENT:
      const newIngredient = {
        ...action.payload,
      };
      return {
        ...state,
        other: [...state.other, newIngredient],
      };
    case REMOVE_CURRENT_INGREDIENT:
      return {
        ...state,
        other: state.other.filter((item) => item.key !== action.payload.key),
      };
    case CLEAR_CURRENT_INGREDIENTS:
      return {
        ...state,
        bun: null,
        other: [],
      };
    case MOVE_FILLING: {
      const canDragIngredients = [...state.other];
      canDragIngredients.splice(
        action.payload.dragIndex,
        0,
        canDragIngredients.splice(action.payload.hoverIndex, 1)[0]
      );

      return {
        ...state,
        other: canDragIngredients,
      };
    }
    default:
      return state;
  }
};

export default currentIngredientsReducer;
