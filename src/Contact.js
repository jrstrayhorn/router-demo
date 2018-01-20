import React from 'react';

const Contact = ({ history }) => {
  setTimeout(() => {
    history.push('/about');
  }, 5000);
  return (
    <div>
      <h3>Contact Us</h3>
      <input type="text" placeholder="your email" className="form-control" />
      <textarea
        type="text"
        placeholder="your message"
        className="form-control"
      />
      <button className="btn btn-primary">send</button>
    </div>
  );
};

export default Contact;
