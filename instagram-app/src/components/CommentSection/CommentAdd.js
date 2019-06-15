import React from 'react';
import './CommentSection.css';

export default props => {
  return (
    <form>
      <input className='comment-add' type='text' placeholder='Add Comment...' />
    </form>
  );
};
