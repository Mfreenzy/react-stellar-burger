import { combineReducers } from 'redux';
import ingredientReducer from '../reducers/ingredientReducer';
import currentIngredientsReducer from '../reducers/currentIngredientsReducer';
import currentIngredientReducer from '../reducers/currentIngredientReducer';
import orderReducer from '../reducers/orderReducer';

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
});

export default rootReducer;