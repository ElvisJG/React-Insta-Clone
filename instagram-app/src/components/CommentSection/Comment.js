import React from 'react';
import './CommentSection.css';

export default props => {
  return (
    <div className='comment'>
      <div className='comments'>
        <strong>{props.comment.username}</strong> {props.comment.text}
      </div>
    </div>
  );
};
