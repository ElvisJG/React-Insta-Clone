import React from 'react';
import Comment from './Comment';
import './Comment.css';

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment
    };
  }
  render() {
    return (
      <div>
        {this.state.comment.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    );
  }
}
