import React from 'react';
import PostHeader from './PostHeader';

import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

export default props => {
  return (
    <div className='post-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <img alt='post images' className='post-image' src={props.post.imageUrl} />
      <CommentSection comment={props.post.comments} />
    </div>
  );
};
