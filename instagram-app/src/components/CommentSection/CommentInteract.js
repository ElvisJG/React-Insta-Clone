import React from 'react';
import './CommentSection.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';

export default props => {
  return (
    <div className='interaction'>
      <div className='icon-container'>
        <div className='icons'>
          <FaRegHeart size='1.5rem' onClick={props.addLike} />
        </div>
        <div className='icons'>
          <FaRegComment size='1.5rem' />
        </div>
      </div>
      <div className='likes'>
        <strong>
          <p>{props.likes}</p>
        </strong>
      </div>
    </div>
  );
};
