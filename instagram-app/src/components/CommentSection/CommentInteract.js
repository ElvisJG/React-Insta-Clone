import React from 'react';
import './CommentSection.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';

export default () => {
  return (
    <div className='interaction'>
      <div className='icon-container'>
        <div className='icons'>
          <FaRegHeart size='1.5rem' />
        </div>
        <div className='icons'>
          <FaRegComment size='1.5rem' />
        </div>
      </div>
      <div className='likes'>
        <strong>
          <p>350 likes</p>
        </strong>
      </div>
    </div>
  );
};
