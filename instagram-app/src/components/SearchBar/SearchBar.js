import React from 'react';
import './SearchBar.css';

export default () => {
  return (
    <div className='search-bar-container'>
      <div className='image' />
      <hr />
      <div>
        <input type='text' placeholder='🔎 search' />
      </div>
      <div className='icons'>1</div>
      <div className='icons'>2</div>
      <div className='icons'>3</div>
    </div>
  );
};
