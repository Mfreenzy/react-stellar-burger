import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { DefaultRootState } from "../services/store";
import { TCurrentIngredientActions } from "../services/actions/currentIngredientActions";
import { TCurrentIngredientsActions } from "../services/actions/currentIngredientsActions";
import { TIngredientActions } from "../services/actions/ingredientActions";
import { TIputsActions } from "../services/actions/inputsActions";
import { TCurrentOrderActions } from "../services/actions/currentOrderActions";
import { TOrderActions } from "../services/actions/orderAction";
import { TUserAction } from "../services/actions/userActions";
import {
    FEED_CONNECT,
    FEED_DISCONNECT,
    FEED_WS_CONNECTING,
    FEED_WS_OPEN,
    FEED_WS_CLOSE,
    FEED_WS_ERROR,
    FEED_WS_GET_FEED,
  } from "../services/actions/feedActions";
  import {
    PROFILEFEED_ORDERS_CONNECT,
    PROFILEFEED_ORDERS_DISCONNECT,
    PROFILEFEED_ORDERS_WS_CONNECTING,
    PROFILEFEED_ORDERS_WS_ERROR,
    PROFILEFEED_ORDERS_WS_OPEN,
    PROFILEFEED_ORDERS_WS_CLOSE,
    PROFILEFEED_ORDERS_WS_GET_FEED,
  } from "../services/actions/profileFeedAction";


export type TAppActions =
    | TCurrentIngredientActions
    | TCurrentIngredientsActions
    | TIngredientActions
    | TIputsActions
    | TCurrentOrderActions
    | TOrderActions
    | TUserAction

export type AppThunk<TReturn = void> = ThunkAction<TReturn, Action, DefaultRootState, TAppActions>;

export type AppDispatch<TReturnType = void> = (action: TAppActions | AppThunk<TReturnType>) => TReturnType;

export type TwsActions = {
    wsConnect: string | typeof FEED_CONNECT | typeof PROFILEFEED_ORDERS_CONNECT;
    wsDisconnect: string | typeof FEED_DISCONNECT | typeof PROFILEFEED_ORDERS_DISCONNECT;
    wsConnecting: string | typeof FEED_WS_CONNECTING | typeof PROFILEFEED_ORDERS_WS_CONNECTING;
    onOpen: string | typeof FEED_WS_OPEN | typeof PROFILEFEED_ORDERS_WS_OPEN;
    onClose: string | typeof FEED_WS_CLOSE | typeof PROFILEFEED_ORDERS_WS_CLOSE;
    onError: string | typeof FEED_WS_ERROR | typeof PROFILEFEED_ORDERS_WS_ERROR;
    onMessage: string | typeof FEED_WS_GET_FEED | typeof PROFILEFEED_ORDERS_WS_GET_FEED;
    wsSendMessage?: string
}