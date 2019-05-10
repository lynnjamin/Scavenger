import React, { Component } from 'react';
import CreatePlay from '../pages/CreatePlay';
import NavigationBar from '../components/NavigationBar';
import "./styles.css";
import axios from "axios";

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
    const {handleAuthentication} = this.props.auth.handleAuthentication;
    return (
      <div className="container">
        
        {
          isAuthenticated() && (
            <div>
              <div>
                <NavigationBar auth={this.props.auth}history={this.props.history}/>
                <CreatePlay />
              </div>
            </div>
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
