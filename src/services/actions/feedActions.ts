import { TWSMessage } from "../../types/types";
export const FEED_CONNECT = 'FEED_CONNECT';
export const FEED_WS_CONNECTING = 'FEED_WS_CONNECTING';
export const FEED_WS_ERROR = 'FEED_WS_ERROR';
export const FEED_WS_OPEN = 'FEED_WS_OPEN';
export const FEED_WS_CLOSE = 'FEED_WS_CLOSE';
export const FEED_WS_GET_FEED = 'FEED_WS_MESSAGE';
export const FEED_DISCONNECT = 'FEED_DISCONNECT';

export  type IFeedConnectAction ={
      type: typeof FEED_CONNECT;
      payload: string;
}
export  type IFeedDisconnectAction ={
      type: typeof FEED_DISCONNECT;
      payload: string;
}
export  type IFeedConnectingAction ={
      type: typeof FEED_WS_CONNECTING;
      payload: string
}
export  type IFeedErrorAction ={
      type: typeof FEED_WS_ERROR;
      payload: string;
}
export  type IFeedOpenAction ={
      type: typeof FEED_WS_OPEN;
}
export  type IFeedCloseAction ={
      type: typeof FEED_WS_CLOSE;
}
export  type IFeedGetMessageAction ={
      type: typeof FEED_WS_GET_FEED;
      payload: TWSMessage;
}

export type TFeedActions = 
| IFeedConnectAction
| IFeedDisconnectAction
| IFeedConnectingAction
| IFeedErrorAction
| IFeedOpenAction
| IFeedCloseAction
| IFeedGetMessageAction;


export const tConnect = (url:string) => ({
    type: FEED_CONNECT,
    payload: url
});

export const tDisconnect = (url:string) => ({
    type: FEED_DISCONNECT,
    payload: url
});