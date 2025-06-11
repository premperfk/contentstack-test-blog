// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from './api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then(setPosts);
  }, []);

  return (
    <div className="App">
      <h1>Articles</h1>
      <div class="post-wrapper">
      {posts.map((post) => (
        <a href={post.url} key={post.uid} className="post">
          <img src={post.featured_image.url} alt={`Image for post${post.uid}`} />
          <h2>{post.title}</h2>
          <p><i>Last Updated:</i> {post.updated_at}</p>
        </a>
      ))}</div>
    </div>
  );
}

export default App;
