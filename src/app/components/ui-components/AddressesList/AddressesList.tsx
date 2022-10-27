import React from 'react';
import { DaDataAddress, DaDataSuggestion } from '../../../types/dadataTypes';
import Card from '../../layout-components/Card';

type AddressesListProps = {
  addresses: DaDataSuggestion<DaDataAddress>[];
  loadingStatus: boolean;
};

const AddressesList: React.FC<AddressesListProps> = ({ addresses, loadingStatus }) => {
  return (
    <Card>
      <div className='addresses-list'>
        <h3 className='addresses-list__title'>Адреса</h3>
        <ul>
          {!loadingStatus ? (
            addresses.map(address => (
              <li key={address.value} className='addresses-list__item'>
                {address.value}
              </li>
            ))
          ) : (
            <p>Loading</p>
          )}
        </ul>
      </div>
    </Card>
  );
};

export default AddressesList;
