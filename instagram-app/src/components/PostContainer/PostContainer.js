import React from 'react';
import Post from './Post';
import './Post.css';

export default props => {
  return (
    <div className='posts-container'>
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};
