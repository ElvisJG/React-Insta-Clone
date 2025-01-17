import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';

import './Post.css';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

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
        <Likes addLike={this.addLike} likes={this.state.likes} />
        <CommentSection comment={this.props.post.comments} />
      </div>
    );
  }
}
