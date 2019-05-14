import React, { Component } from 'react';
import CreatePlay from '../pages/CreatePlay';
import "./styles.css";

class Home extends Component {

  // componentDidMount(){
  //   axios.get("/api/users/" + window.localStorage.sub)
  //   .then(response => {
  //     console.log("here 100: ", response)
  //   })
  // }

  login() {
    this.props.auth.login();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <div className="container">
        
          {
            isAuthenticated() && (
                  <CreatePlay />
              )
              
          }
          {
            !isAuthenticated() && (
              <div className="loggedOutContainer">
                <h1 className="titleh1">ScAvengers</h1>
                <h4>
                  You are not logged in! Please{' '}
                  <div style={{ cursor: 'pointer', color:'#eeeeee' }}
                    
                    onClick={this.login.bind(this)}>
                    Log In
                  </div>
                  {' '}to continue.
                </h4>
              </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Home;
