import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Login to Short Link</h1>
        login for here
        <Link to="/signup">
          Create an account
        </Link>
      </div>
    );
  }
}