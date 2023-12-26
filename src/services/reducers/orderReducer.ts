import {
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  RESET_ORDER,
  TOrderActions,
} from "../actions/orderAction";

type TOrderState = {
  orderNumber: number | null,
  orderRequest: boolean,
  orderFailed: boolean,
}

const initialState:TOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
};

const orderReducer = (state = initialState, action:TOrderActions):TOrderState => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        orderNumber: action.payload,
        orderRequest: false,
      };
    }
    case POST_ORDER_FAILURE: {
      return { ...state, orderFailed: true, orderNumber: null };
    }
    case RESET_ORDER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
