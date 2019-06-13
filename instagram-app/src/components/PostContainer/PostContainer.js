import React from 'react';
import Post from './Post';
import './Post.css';

export default props => {
  return (
    <div className='posts-container'>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};
