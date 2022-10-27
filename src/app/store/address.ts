import { createSlice } from '@reduxjs/toolkit';
import addressService from '../services/addresses.service';
import { DaDataAddress, DaDataSuggestion } from './../types/dadataTypes';
import { AppThunk, RootState } from './createStore';

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    entities: [] as Array<DaDataSuggestion<DaDataAddress>>,
    isLoading: true as boolean,
    error: null as string | null,
  },
  reducers: {
    addressesRequested: state => {
      state.isLoading = true;
    },
    addressesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    addressesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: addressesReducer } = addressesSlice;

const { addressesRequested, addressesReceived, addressesRequestFailed } = actions;

export const loadAddressesList =
  ({ query }: { query: string }): AppThunk =>
  async dispatch => {
    dispatch(addressesRequested());
    try {
      const { suggestions } = await addressService.getAll(query);
      dispatch(addressesReceived(suggestions));
    } catch (error) {
      if (error instanceof Error) dispatch(addressesRequestFailed(error.message));
    }
  };

export const getAddressesList = () => (state: RootState) => state.addresses.entities;
export const getAddressesListLoadingStatus = () => (state: RootState) => state.addresses.isLoading;

export default addressesReducer;
