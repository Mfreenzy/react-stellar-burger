import {
    USER_NAME,
    PASSWORD,
    EMAIL,
    NEW_PASSWORD
  } from "../actions/inputsActions";
  
  const initialState = {
    userName: '',
    password: '',
    email: '',
    verifyCode:'',
  };
  
  
  export function inputsReducer(state = initialState, action) {
    switch (action.type) {
      case USER_NAME:
        return {
          ...state,
          userName: action.payload
        };
      case PASSWORD:
        return {
          ...state,
          password: action.payload
        };
      case EMAIL:
        return {
          ...state,
          email: action.payload
        };
      case NEW_PASSWORD:
        return {
          ...state,
          email: action.payload
        };
      default: {
        return state;
      }
    }
  }