import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <div>
      Posts
      <ol>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
