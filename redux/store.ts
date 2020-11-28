import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { NextPageContext } from 'next';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import rootReducer from './reducers';

const store = configureStore({
  middleware: getDefaultMiddleware(),
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
interface AppStore extends Store {
  dispatch: AppDispatch;
}
export interface ReduxNextPageContext extends NextPageContext {
  store: AppStore;
}

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
