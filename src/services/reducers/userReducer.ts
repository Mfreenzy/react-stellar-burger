import { TUser } from '../../types/types';
import { SET_AUTH_CHECKED, SET_USER, TUserAction } from '../actions/userActions';

type TUserState = {
  user: TUser | null,
  isAuthChecked: boolean
}

const initialState:TUserState = {
    user: null,
    isAuthChecked: false,
};

export const userReducer = (state = initialState, action:TUserAction):TUserState => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;    
  }
};