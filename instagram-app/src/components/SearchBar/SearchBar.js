import React from 'react';
import logo from '../../instagramlogo.png';
import './SearchBar.css';

export default () => {
  return (
    <div className='search-bar-container'>
      <div className='image'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='🔎 search' />
      </div>
      <div className='icons'>1</div>
      <div className='icons'>2</div>
      <div className='icons'>3</div>
    </div>
  );
};
