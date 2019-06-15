import React from 'react';
import './CommentSection.css';

export default props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        className='comment-add'
        type='text'
        placeholder='Add Comment...'
        onChange={props.changeComment}
      />
    </form>
  );
};
