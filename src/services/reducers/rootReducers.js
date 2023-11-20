import { combineReducers } from 'redux';
import ingredientReducer from '../reducers/ingredientReducer';
import currentIngredientsReducer from '../reducers/currentIngredientsReducer';
import currentIngredientReducer from '../reducers/currentIngredientReducer';
import orderReducer from '../reducers/orderReducer';
import { inputsReducer } from '../reducers/inputsReducer';
import { userReducer } from '../reducers/userReducer';

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  inputs: inputsReducer,
  user: userReducer
});

export default rootReducer;