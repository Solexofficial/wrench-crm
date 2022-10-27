import { DaDataAddress, DaDataSuggestion } from './../types/dadataTypes';
import httpService from './http.service';

const addressesEndPoint = 'address/';

type AddressesResponseType = {
  suggestions: DaDataSuggestion<DaDataAddress>;
};

const addressesService = {
  getAll: async (query?: string) => {
    const { data } = await httpService.get<AddressesResponseType>(addressesEndPoint, {
      params: { query: query },
    });
    return data;
  },
};

export default addressesService;
