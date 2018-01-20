import React from 'react';
import { Route, Link } from 'react-router-dom';

import About from './About';
const Posts = () => <h1>Posts Content</h1>;
const Post = () => <h1>Post Content</h1>;
const Contact = () => <h1>Contact Content</h1>;

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Main Content</h1>
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Content;
