import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';
import authSlice from './slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseApi, baseGraphqlApi} from '../utils/baseApi';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [baseGraphqlApi.reducerPath]: baseGraphqlApi.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'app-local-key',
    version: 1,
    storage: AsyncStorage,
    blacklist: [baseApi.reducerPath, baseGraphqlApi.reducerPath],
    whitelist: [authSlice.name],
  },
  rootReducer,
);
const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
    baseApi.middleware,
  ];
  return middlewareList.concat(baseGraphqlApi.middleware);
};

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => middlewareHandler(getDefaultMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
