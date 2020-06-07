import React, { useState } from 'react';
import { formatDate } from '@/utils';
import Button from '@/components/Button';
import CommentModal from '@/components/CommentModal';
import PostModal from '@/components/PostModal';
import styles from "./Dashboard.module.scss";

// const postsArray = [];
const postsArray = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    createdAt: Date.now(),
    content: "Content string...",
    comments: [
      {
        id: "1",
        firstName: "James",
        lastName: "Dole",
        createdAt: Date.now(),
        content: "This is a comment...",
      }
    ],
    likes: 2
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    createdAt: Date.now(),
    content: "Another content string...",
    comments: [
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        createdAt: Date.now(),
        content: "Another comment goes here...",
      }
    ],
    likes: 1
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    createdAt: Date.now(),
    content: "Content string...",
    comments: [
      {
        id: "3",
        firstName: "James",
        lastName: "Dole",
        createdAt: Date.now(),
        content: "Comment goes here...",
      }
    ],
    likes: 1
  },
  {
    id: "4",
    firstName: "John",
    lastName: "Doe",
    createdAt: Date.now(),
    content: "Content string...",
    comments: [
      {
        id: "4",
        firstName: "James",
        lastName: "Dole",
        createdAt: Date.now(),
        content: "Comment goes here...",
      }
    ],
    likes: 1
  }
];

const Dashboard = () => {
  const [createAPost, setCreateAPost] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postToView, setPostToView] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log("Create Post:", createAPost.trim());
    return "Posted!";
  }

  const openPostModal = (showModal, post) => {
    setShowPostModal(showModal);
    setPostToView(post);
  }

  let displayPostModal;
  if (showPostModal) {
    displayPostModal = (<PostModal post={postToView} setShowModal={setShowPostModal} />);
    // displayPostModal = (<p>NEW POST</p>);
    // console.log("displayPostModal:", displayPostModal);
  }
  else {
    displayPostModal = null;
  }

  let displayCommentModal;
  if (showCommentModal) {
    displayCommentModal = (<CommentModal setShowModal={setShowCommentModal} />);
  }
  else {
    displayCommentModal = null;
  }

  const likePost = () => {
    console.log("likePost");
  }

  let displayPosts;
  if (postsArray.length > 0) {
    displayPosts = postsArray.map(post => {
      return (
        <div className={styles.post} key={post.id}>
          <h4>{post.firstName} {post.lastName}</h4>
          <span>{formatDate(post.createdAt)}</span>
          <p>{post.content}</p>
          <ul>
            <li>
              <p onClick={() => setShowCommentModal(true)}>Comments {post.comments.length}</p>
            </li>
            <li>
              <p onClick={() => likePost(post.id, post.likes)}>Likes {post.likes}</p>
            </li>
            <li>
              <p onClick={() => openPostModal(true, post)}>View full post</p>
            </li>
          </ul>
        </div>
      );
    });
  }
  else {
    displayPosts = (<p className={styles.noPosts}>There are currently no posts.</p>);
  }

  return (
    <div className={styles.dashboard}>

      {displayCommentModal}
      {displayPostModal}

      <div className={styles.leftCol}>
        <div className={styles.profile}>
          <h3>John Doe</h3>
        </div>
        <div className={styles.createPost}>
          <p>Create A Post</p>
          <form onSubmit={handleCreatePost}>
            <textarea value={createAPost} onChange={e => setCreateAPost(e.target.value)} />
            <Button disabled={!createAPost} size="fullWidth">Create Post</Button>
          </form>
        </div>
      </div>
      <div className={styles.rightCol}>
        {displayPosts}
      </div>
    </div>
  );
};

export default Dashboard;
