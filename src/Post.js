import React from 'react';

const Post = ({ posts, match }) => {
  let post = posts.find(element => element.slug === match.params.id);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p>
        <a href={post.link} target="_blank">
          Continue reading...
        </a>
      </p>
    </div>
  );
};

export default Post;
