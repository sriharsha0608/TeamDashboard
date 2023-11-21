import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  return (
    <div className="col-md-12 discussion-forum">
      <h2>Discussion Forum</h2>
      <div className="forum-posts">
        {posts.map((post, index) => (
          <div key={index} className="forum-post">
            {post}
          </div>
        ))}
      </div>
      <div className="col-md-12 add-post">
        <textarea
          placeholder="Type your post..."
          value={newPost}
          onChange={handlePostChange}
        ></textarea>
        <button class="btn btn-primary"onClick={handleAddPost}>Add Post</button>
      </div>
    </div>
  );
};

export default DiscussionForum;
