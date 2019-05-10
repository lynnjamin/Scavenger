import React, { Component } from 'react';
import CreatePlay from '../pages/CreatePlay';

class Home extends Component {

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const {handleAuthentication} = this.props.auth.handleAuthentication;
    console.log("here: ", handleAuthentication);
    return (
      <div className="container">
        
        {
          isAuthenticated() && (
                
              <CreatePlay />
            )
            
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}>
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
