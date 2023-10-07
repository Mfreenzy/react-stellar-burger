import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../services/reducers/rootReducers';

// const initialState = {
//     allIngredients: { ingredients: [], isLoading: false, hasError: false },
//     currentIngredients: { bun: null, other: [] },
//     currentIngredient: { ingredientDetails: null },
//     order: { orderNumber: null, orderRequest: false, orderFailed: false, },
//   };

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;