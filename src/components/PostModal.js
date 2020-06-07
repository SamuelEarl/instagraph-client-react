import React from 'react';
import { formatDate } from '@/utils';
import styles from './PostModal.module.scss';

const PostModal = ({ post, setShowModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <p
            className={styles.closeModal}
            onClick={() => setShowModal(false)}
          >
            &times;
          </p>
        </div>
        <div className={styles.post}>
          <h5>{post.firstName} {post.lastName}</h5>
          <span>{formatDate(post.createdAt)}</span>
          <p>{post.content}</p>
          <ul>
            <li>
            <div>Comments {post.comments.length}</div>
            </li>
            <li>
              <p>Likes {post.likes}</p>
            </li>
          </ul>
        </div>
        <div className={styles.comments}>
          {
            post.comments.map((comment) => {
              return (
                <div className={styles.comment} key={comment.id}>
                  <p>{comment.firstName} {comment.lastName}</p>
                  <span>{formatDate(comment.createdAt)}</span>
                  <p>{comment.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PostModal;
