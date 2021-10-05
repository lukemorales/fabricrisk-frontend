import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from '../../../features/auth/reducer';
import { IS_DEV } from '../../../constants';

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(
  {
    key: '@fabricrisk',
    version: 1,
    storage,
  },
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: IS_DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
