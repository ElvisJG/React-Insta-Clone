import React from 'react';
import './Comment.css';

export default props => {
  return (
    <div className='comment'>
      <div className='comment'>{props.comment.text}</div>
      <div className='user'>{props.comment.username}</div>
    </div>
  );
};
