import React from 'react';
import Button from '../../common-components/Button';
import { ReactComponent as SearchIcon } from '../../../assets/svg/ic_search.svg';

type SearchbarProps = {
  value: React.MutableRefObject<HTMLInputElement | null>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ value, onSubmit }) => {
  return (
    <div className='search-bar'>
      <form action='submit' onSubmit={onSubmit}>
        <input
          type='text'
          className='search-bar__input'
          ref={value}
          placeholder='Введите интересующий вас адрес'
          pattern='.{3,}'
          required
          title='Введите минимум 3 символа'
        />
        <Button type='submit'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon style={{ marginRight: '16px' }} />
            Поиск
          </div>
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
