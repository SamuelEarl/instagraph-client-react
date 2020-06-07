import React, { useState } from 'react';
import Button from '@/components/Button';
import styles from './CommentModal.module.scss';

const CommentModal = (props) => {
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log("Submit Comment:", comment.trim());
    return "Commented!";
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <p
            className={styles.closeModal}
            onClick={() => props.setShowModal(false)}
          >
            &times;
          </p>
        </div>
        <p>Add a comment</p>
        <form onSubmit={handleSubmitComment}>
          <textarea value={comment} onChange={e => setComment(e.target.value)} />
          <Button disabled={!comment}>Add comment</Button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
