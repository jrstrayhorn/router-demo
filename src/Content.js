import React from 'react';
import { Route, Link } from 'react-router-dom';

import posts from './data/posts';

import About from './About';
import Contact from './Contact';
import Posts from './Posts';
import Post from './Post';

const NavBarLink = ({ label, to }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

const PostsPage = props => {
  return <Posts posts={posts} />;
};

const PostPage = props => {
  return <Post posts={posts} {...props} />;
};

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Node.University</h1>
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav">
            <NavBarLink to="/about" label="About" />
            <NavBarLink to="/posts" label="Blog" />
            <NavBarLink to="/contact" label="Contact Us" />
            <NavBarLink to="/login" label="Login" />
          </ul>
        </div>
        <Route path="/about" component={About} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Content;
