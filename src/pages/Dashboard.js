import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHOR, GET_ALL_POSTS } from '@/api/api';
import { formatDate, teaserText } from '@/utils';
import Button from '@/components/Button';
import CommentModal from '@/components/CommentModal';
import PostModal from '@/components/PostModal';
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [createAPost, setCreateAPost] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postToView, setPostToView] = useState('');

  const getAuthor = useQuery(GET_AUTHOR, {
    variables: { id: '0x4e4b' }
  });
  let authorData;
  if (!getAuthor.data || !getAuthor.data.getAuthor) {
    authorData = (<h3>Loading author data...</h3>);
  }
  else {
    const author = getAuthor.data.getAuthor;
    authorData = (<h3>{author.firstName} {author.lastName}</h3>)
  }

  const getAllPosts = useQuery(GET_ALL_POSTS);
  console.log("getAllPosts:", getAllPosts);
  let posts;
  if (!getAllPosts.data || getAllPosts.data.queryPost.length === 0) {
    posts = (<p className={styles.noPosts}>There are currently no posts.</p>);
  }
  else {
    const postsArray = getAllPosts.data.queryPost;
    posts = postsArray.map(post => {
      return (
        <div className={styles.post} key={post.id}>
          <h4>{post.author.firstName} {post.author.lastName}</h4>
          <span className={styles.date}>{formatDate(post.createdAt)}</span>
          <p>{teaserText(post.content)}</p>
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

  return (
    <div className={styles.dashboard}>

      {displayCommentModal}
      {displayPostModal}

      <div className={styles.leftCol}>
        <div className={styles.profile}>
          {authorData}
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
        {posts}
      </div>
    </div>
  );
};

export default Dashboard;
