import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img
        alt='post header'
        className='post-thumbnail'
        src={props.thumbnailUrl}
      />
      <div className='username'>
        <strong>{props.username}</strong>
      </div>
    </div>
  );
};

export default PostHeader;
