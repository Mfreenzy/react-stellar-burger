import { combineReducers } from "redux";
import ingredientReducer from "../reducers/ingredientReducer";
import currentIngredientsReducer from "../reducers/currentIngredientsReducer";
import currentIngredientReducer from "../reducers/currentIngredientReducer";
import orderReducer from "../reducers/orderReducer";
import { inputsReducer } from "../reducers/inputsReducer";
import { userReducer } from "../reducers/userReducer";
import { currentOrderReducer } from "./currentOrderReducer";
import {
  FEED_CONNECT,
  FEED_DISCONNECT,
  FEED_WS_CONNECTING,
  FEED_WS_OPEN,
  FEED_WS_CLOSE,
  FEED_WS_ERROR,
  FEED_WS_GET_FEED
} from "../actions/feedActions";
import { socketMiddleware } from "../middleware/socketMiddleware";
import { feedReducer } from "./feedReducer";

export const feedMiddleware = socketMiddleware({
  wsConnect: FEED_CONNECT,
  wsDisconnect: FEED_DISCONNECT,
  wsConnecting: FEED_WS_CONNECTING,
  onOpen: FEED_WS_OPEN,
  onClose: FEED_WS_CLOSE,
  onError: FEED_WS_ERROR,
  onMessage: FEED_WS_GET_FEED,
});

// const profileFeedMiddleware = socketMiddleware({
//   wsConnect: ORDERS_CONNECT,
//   wsDisconnect: ORDERS_DISCONNECT,
//   wsConnecting: ORDERS_WS_CONNECTING,
//   onOpen: ORDERS_WS_OPEN,
//   onClose: ORDERS_WS_CLOSE,
//   onError: ORDERS_WS_ERROR,
//   onMessage: ORDERS_WS_GET_FEED
// });

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  inputs: inputsReducer,
  user: userReducer,
  currentOrder: currentOrderReducer,
  feed: feedReducer,
});


export default rootReducer;
