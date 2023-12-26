import { SET_CURRENT_ORDER, CLEAR_CURRENT_ORDER, SET_CURRENT_ORDER_ERROR, TCurrentOrderActions } from "../actions/currentOrderActions";
import { TOrder } from "../../types/types";

type TOrderState = {
    orders: TOrder[] | null;
    error: string | null;
    number: number
}
const initialOrderState: TOrderState = {
    orders: [],
    error: null,
    number: 0
}

// const initialOrderState = {
//     error: null,
//     number: null
// }

export const currentOrderReducer = (state = initialOrderState, action:TCurrentOrderActions):TOrderState => {
    switch (action.type) {
        case SET_CURRENT_ORDER:
            return {
                ...state,
                orders: [action.payload]
            };
        case CLEAR_CURRENT_ORDER:
            return {
                ...state,
                orders: null
            };
        case SET_CURRENT_ORDER_ERROR:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
    }
}