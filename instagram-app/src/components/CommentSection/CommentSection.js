import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import CommentAdd from './CommentAdd';
import CommentInteract from './CommentInteract';

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
        <CommentInteract />
        {this.state.comment.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
        <CommentAdd />
      </div>
    );
  }
}
