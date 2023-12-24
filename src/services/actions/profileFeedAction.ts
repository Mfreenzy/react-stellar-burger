import { TWSMessage } from "../../types/types";
export const PROFILEFEED_ORDERS_CONNECT = 'PROFILEFEED_ORDERS_CONNECT';
export const PROFILEFEED_ORDERS_WS_CONNECTING = 'PROFILEFEED_ORDERS_WS_CONNECTING';
export const PROFILEFEED_ORDERS_WS_ERROR = 'PROFILEFEED_ORDERS_WS_ERROR';
export const PROFILEFEED_ORDERS_WS_OPEN = 'PROFILEFEED_ORDERS_WS_OPEN';
export const PROFILEFEED_ORDERS_WS_CLOSE = 'PROFILEFEED_ORDERS_WS_CLOSE';
export const PROFILEFEED_ORDERS_WS_GET_FEED = 'PROFILEFEED_ORDERS_WS_MESSAGE';
export const PROFILEFEED_ORDERS_DISCONNECT = 'PROFILEFEED_ORDERS_DISCONNECT';

export type IConnect ={
       type: typeof PROFILEFEED_ORDERS_CONNECT;
       payload: string;
}
export type IDisconnect ={
       type: typeof PROFILEFEED_ORDERS_DISCONNECT;
       payload: string;
}
export type IError ={
       type: typeof PROFILEFEED_ORDERS_WS_ERROR;
       payload: string;
}
export type IConnecting ={
       type: typeof PROFILEFEED_ORDERS_WS_CONNECTING;
    payload: string
}
export type IOpen ={
       type: typeof PROFILEFEED_ORDERS_WS_OPEN;
}
export type IClose ={
       type: typeof PROFILEFEED_ORDERS_WS_CLOSE;
}
export type IGetFeed ={
       type: typeof PROFILEFEED_ORDERS_WS_GET_FEED;
    payload: TWSMessage;
}

export type TProfileFeedActions = 
| IConnect
| IDisconnect
| IError
| IConnecting
| IOpen
| IClose
| IGetFeed;


export const connect = (url:string) => ({
    type: PROFILEFEED_ORDERS_CONNECT,
    payload: url
});

export const disconnect = (url:string) => ({
    type: PROFILEFEED_ORDERS_DISCONNECT,
    payload: url
});

