import { combineReducers } from "redux";
import ingredientReducer from "./ingredientReducer";
import currentIngredientsReducer from "./currentIngredientsReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import orderReducer from "./orderReducer";
import { inputsReducer } from "./inputsReducer";
import { userReducer } from "./userReducer";
import { currentOrderReducer } from "./currentOrderReducer";
import {
  FEED_CONNECT,
  FEED_DISCONNECT,
  FEED_WS_CONNECTING,
  FEED_WS_OPEN,
  FEED_WS_CLOSE,
  FEED_WS_ERROR,
  FEED_WS_GET_FEED,
} from "../actions/feedActions";
import {
  PROFILEFEED_ORDERS_CONNECT,
  PROFILEFEED_ORDERS_DISCONNECT,
  PROFILEFEED_ORDERS_WS_CONNECTING,
  PROFILEFEED_ORDERS_WS_ERROR,
  PROFILEFEED_ORDERS_WS_OPEN,
  PROFILEFEED_ORDERS_WS_CLOSE,
  PROFILEFEED_ORDERS_WS_GET_FEED,
} from "../actions/profileFeedAction";
import { socketMiddleware } from "../middleware/socketMiddleware";
import { feedReducer } from "./feedReducer";
import { profileFeedReducer } from "./profileFeedReducer";

export const feedMiddleware = socketMiddleware({
  wsConnect: FEED_CONNECT,
  wsDisconnect: FEED_DISCONNECT,
  wsConnecting: FEED_WS_CONNECTING,
  onOpen: FEED_WS_OPEN,
  onClose: FEED_WS_CLOSE,
  onError: FEED_WS_ERROR,
  onMessage: FEED_WS_GET_FEED,
});

export const profileFeedMiddleware = socketMiddleware({
  wsConnect: PROFILEFEED_ORDERS_CONNECT,
  wsDisconnect: PROFILEFEED_ORDERS_DISCONNECT,
  wsConnecting: PROFILEFEED_ORDERS_WS_CONNECTING,
  onOpen: PROFILEFEED_ORDERS_WS_OPEN,
  onClose: PROFILEFEED_ORDERS_WS_CLOSE,
  onError: PROFILEFEED_ORDERS_WS_ERROR,
  onMessage: PROFILEFEED_ORDERS_WS_GET_FEED,
});

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  inputs: inputsReducer,
  user: userReducer,
  currentOrder: currentOrderReducer,
  feed: feedReducer,
  profileFeed: profileFeedReducer,
});

export default rootReducer;
