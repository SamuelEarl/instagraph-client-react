import React from 'react';
import { formatDate } from '@/utils';
import './Modals.global.scss';
import styles from './PostModal.module.scss';

const PostModal = ({ post, setShowModal }) => {
  return (
    <div id="modals">
      <div className="modal">
        <div className="modalContent">
          {/* <div className="modalHeader"> */}
            <div
              className="modalClose"
              onClick={() => setShowModal(false)}
            >
              &times;
            </div>
          {/* </div> */}
          <div className={styles.post}>
            <h4>{post.author.firstName} {post.author.lastName}</h4>
            <span className={styles.date}>{formatDate(post.createdAt)}</span>
            <p>{post.content}</p>
            <ul>
              <li>
              <p>Comments {post.comments.length}</p>
              </li>
              <li>
                <p>Likes {post.likes}</p>
              </li>
            </ul>
          </div>
          <div className={styles.comments}>
            <h4 className={styles.commentsHeading}>Comments</h4>
            { post.comments.length > 0 ?
              post.comments.map((comment) => {
                return (
                  <div className={styles.comment} key={comment.id}>
                    <h5>{comment.firstName} {comment.lastName}</h5>
                    <span className={styles.date}>{formatDate(comment.createdAt)}</span>
                    <p>{comment.content}</p>
                  </div>
                );
              })
              :
              <p className={styles.noComments}>No comments</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
