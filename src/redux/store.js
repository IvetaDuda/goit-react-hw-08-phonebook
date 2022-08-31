import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { contactsApi } from './contactsApi';

import { ReducerFilter } from './contactsSlice';
import { userApi } from './userApi';
import { ReducerUser } from './userSlice';

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

const userPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};
const persisterUserReducer = persistReducer(userPersistConfig, ReducerUser);

const store = configureStore({
  reducer: {
    filter: ReducerFilter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    users: persisterUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, contactsApi.middleware),
});
const persistor = persistStore(store);

export { store, persistor };

setupListeners(store.dispatch);
