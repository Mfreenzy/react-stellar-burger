import { configureStore } from '@reduxjs/toolkit';
import { feedMiddleware } from './reducers/rootReducers';
import { profileFeedMiddleware } from './reducers/rootReducers';
import rootReducer from './reducers/rootReducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(feedMiddleware,profileFeedMiddleware);
    },
  });

export default store;

export type DefaultRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<DefaultRootState> = useSelector;