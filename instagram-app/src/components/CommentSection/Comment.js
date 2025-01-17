import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

export default props => {
  return (
    <div className='comment'>
      <div className='comments'>
        <strong>{props.comment.username}</strong> {props.comment.text}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
