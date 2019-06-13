import React from 'react';
import logo from '../../instagramlogo.png';
import './SearchBar.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';

export default () => {
  return (
    <div className='search-bar-container'>
      <div className='image'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='🔍  search' />
      </div>
      <div className='icon-container'>
        <div className='icons'>
          <FaRegCompass size='1.5rem' />
        </div>
        <div className='icons'>
          <FaRegHeart size='1.5rem' />
        </div>
        <div className='icons'>
          <FaRegUser size='1.5rem' />
        </div>
      </div>
    </div>
  );
};
