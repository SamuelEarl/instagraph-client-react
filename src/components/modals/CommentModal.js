import React, { useState } from 'react';
import Button from '@/components/Button';
import './Modals.global.scss';
import styles from './CommentModal.module.scss';

const CommentModal = (props) => {
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log("Submit Comment:", comment.trim());
    return "Commented!";
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <p
            className="modalClose"
            onClick={() => props.setShowModal(false)}
          >
            &times;
          </p>
        </div>
        <p className={styles.addCommentHeading}>Add a comment</p>
        <form onSubmit={handleSubmitComment}>
          <textarea
            className={styles.addCommentText}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <Button disabled={!comment}>Add comment</Button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
