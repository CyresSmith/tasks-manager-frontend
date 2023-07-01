import { configureStore } from '@reduxjs/toolkit';

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

import storage from 'redux-persist/lib/storage';

import { auth } from './auth/authSlice';
import { categoriesAPI } from './categoriesAPI';
import { tasksAPI } from './tasksAPI';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, auth);

const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [tasksAPI.reducerPath]: tasksAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    categoriesAPI.middleware,
    tasksAPI.middleware,
  ],
});

export default store;
export const persistor = persistStore(store);
