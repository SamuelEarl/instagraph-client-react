import React, { useState } from 'react';
import Button from '@/components/Button';
import styles from "./Dashboard.module.scss";

// const postsArray = [];
const postsArray = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    createdAt: "Some time",
    content: "Content string...",
    comments: [
      {
        firstName: "James",
        lastName: "Dole",
        createdAt: "comment time",
        content: "Comment goes here...",
      }
    ],
    likes: 2
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    createdAt: "Some time",
    content: "Content string...",
    comments: [
      {
        firstName: "James",
        lastName: "Dole",
        createdAt: "comment time",
        content: "Comment goes here...",
      }
    ],
    likes: 1
  }
];

const Dashboard = () => {
  const [post, setPost] = useState('');

  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log("Create Post:", post.trim());
    return "Posted!";
  }

  const openCommentModal = () => {
    console.log("openCommentModal");
  }

  const likePost = () => {
    console.log("likePost");
  }

  const viewPost = () => {
    console.log("viewPost");
  }

  let displayPosts;
  if (postsArray.length > 0) {
    displayPosts = postsArray.map(post => {
      return (
        <div className={styles.post} key={post.id}>
          <h4>{post.firstName} {post.lastName}</h4>
          <span>{post.createdAt}</span>
          <p>{post.content}</p>
          <ul>
            <li>
              <a onClick={() => openCommentModal(post)}>Comments {post.comments.length}</a>
            </li>
            <li>
              <a onClick={() => likePost(post.id, post.likes)}>Likes {post.likes}</a>
            </li>
            <li>
              <a onClick={() => viewPost(post)}>View full post</a>
            </li>
          </ul>
        </div>
      );
    });
  }
  else {
    displayPosts = (<p>There are currently no posts.</p>);
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.leftCol}>
        <div className={styles.profile}>
          <h3>John Doe</h3>
        </div>
        <div className={styles.createPost}>
          <p>Create A Post</p>
          <form onSubmit={handleCreatePost}>
            <textarea value={post} onChange={e => setPost(e.target.value)} />
            <Button disabled={!post} size="fullWidth">Create Post</Button>
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
