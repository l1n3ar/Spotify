import React from 'react';
import './Header.css';
import { useStateValue } from '../services/StateProvider';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header({ spotify }) {
  const [{ user }, __] = useStateValue();

  console.log('User' + user);

  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input
          placeholder='Search for Artists, Songs, or Podcasts '
          type='text'
        />
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
