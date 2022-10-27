import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import addressesReducer from './address';

const rootReducer = combineReducers({
  addresses: addressesReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<Promise<any>, RootState, unknown, Action>;
