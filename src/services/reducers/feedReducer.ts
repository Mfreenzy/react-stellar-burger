import {
    FEED_WS_CONNECTING,
    FEED_WS_ERROR,
    FEED_WS_OPEN,
    FEED_WS_CLOSE,
    FEED_WS_GET_FEED
} from "../actions/feedActions";
import { TOrder } from "../../types/types";
import { TFeedActions } from "../actions/feedActions";

type TFeedState = {
    isLoading: boolean;
    feedCheckConnected: boolean;
    error: null | string;
    orders: TOrder[] | [];
    total: number | null;
    totalToday: number | null;
}

const initialFeedState:TFeedState = {
    isLoading: false,
    feedCheckConnected: false,
    error: null,
    orders: [],
    total: null,
    totalToday: null
}

export const feedReducer = (state = initialFeedState, action:TFeedActions):TFeedState => {
    switch (action.type) {
        case FEED_WS_CONNECTING:
            return {
                ...state,
                isLoading: true,
                error: action.payload,
            };
        case FEED_WS_OPEN:
            return {
                ...state,
                isLoading: false,
                feedCheckConnected: true,
            };
        case FEED_WS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case FEED_WS_GET_FEED:
            return {
                ...state,
                feedCheckConnected: true,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        case FEED_WS_CLOSE:
            return {
                ...state,
                feedCheckConnected: false,
        };
        default:
            return state;
    };
};