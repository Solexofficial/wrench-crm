import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import AddressesList from '../../../components/ui-components/AddressesList';
import Searchbar from '../../../components/ui-components/Searchbar';
import { getAddressesList, getAddressesListLoadingStatus, loadAddressesList } from '../../../store/address';
import { useAppDispatch } from '../../../store/createStore';

const AddressPage = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useRef<HTMLInputElement | null>(null);

  const addressesList = useSelector(getAddressesList());
  const addressesListLoadingStatus = useSelector(getAddressesListLoadingStatus());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.current) {
      dispatch(loadAddressesList({ query: searchQuery.current.value.trim() }));
      searchQuery.current.value = '';
    }
  };

  return (
    <section className='section section--addresses'>
      <h2 className='section-title'>Поиск адресов</h2>
      <div className='section-subtitle'>Введите интересующий вас адрес</div>
      <Searchbar value={searchQuery} onSubmit={handleSubmit} />
      {addressesList.length > 0 && (
        <AddressesList addresses={addressesList} loadingStatus={addressesListLoadingStatus} />
      )}
    </section>
  );
};

export default AddressPage;
