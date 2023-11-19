import { configureStore } from '@reduxjs/toolkit';
import { feedMiddleware } from '../services/reducers/rootReducers';
import rootReducer from '../services/reducers/rootReducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(feedMiddleware);
    },
  });

export default store;