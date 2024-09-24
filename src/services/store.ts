import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import user from './slices/user';
import order from './slices/order';
import ingredients from './slices/ingredients';
import constructor from './slices/constructor';
import feed from './slices/feed';

const rootReducer = combineReducers({
  user: user,
  order: order,
  feed: feed,
  ingredients: ingredients,
  constructorItems: constructor
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
