import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

import './Post.css';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  render() {
    return (
      <div className='post-border'>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <img
          alt='post images'
          className='post-image'
          src={this.props.post.imageUrl}
        />
        <CommentSection comment={this.props.post.comments} />
      </div>
    );
  }
}
