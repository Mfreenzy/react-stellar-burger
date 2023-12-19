import { configureStore } from '@reduxjs/toolkit';
import { feedMiddleware } from './reducers/rootReducers';
import { profileFeedMiddleware } from './reducers/rootReducers';
import rootReducer from './reducers/rootReducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(feedMiddleware,profileFeedMiddleware);
    },
  });

export default store;

export type DefaultRootState = ReturnType<typeof rootReducer>;