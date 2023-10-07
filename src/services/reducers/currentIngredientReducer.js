import {
  SET_INGREDIENT_DETAILS,
  CLEAR_INGREDIENT_DETAILS,
} from "../actions/currentIngredientActions";

const initialState = {
  Details: null,
};

function ingredientDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return {
        ...state,
        Details: action.payload,
      };
    case CLEAR_INGREDIENT_DETAILS:
      return {
        ...state,
        Details: null,
      };
    default:
      return state;
  }
}

export default ingredientDetailsReducer;
