import React from 'react';
import {browserHistory, withRouter} from 'react-router-dom';

class Signup extends React.Component {

  onLogoutButtonClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>
          Link component
        </h1>
        <button onClick={this.onLogoutButtonClick.bind(this)}>Log out</button>
      </div>
    );
  }
}

export default withRouter(Signup);