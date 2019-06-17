import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import CommentAdd from './CommentAdd';
import CommentInteract from './CommentInteract';
import PropTypes from 'prop-types';

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comment,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.Id))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUpdate() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'Elvis' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  render() {
    // return (
    //   <div>
    //     {this.state.comment.map((comment, index) => (
    //       <Comment comment={comment} key={index} />
    //     ))}
    //     <CommentAdd
    //       comment={this.state.comment}
    //       submitComment={this.handleCommentSubmit}
    //       changeComment={this.commentHandler}
    //     />
    return (
      <div>
        <CommentInteract />
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentAdd
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};
