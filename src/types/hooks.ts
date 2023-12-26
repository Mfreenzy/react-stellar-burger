import { DefaultRootState } from "../services/store"
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux"
import { AppThunk, AppDispatch } from "./thunk"
import type {} from "redux-thunk/extend-redux";

export const useSelector: TypedUseSelectorHook<DefaultRootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 
