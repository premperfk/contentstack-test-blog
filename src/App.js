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
      <h1>Contentstack Blog</h1>
      {posts.map((post) => (
        <div key={post.uid} className="post">
          <h2>{post.title}</h2>
          <p><strong>Author:</strong> {post.author}</p>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      ))}
    </div>
  );
}

export default App;
