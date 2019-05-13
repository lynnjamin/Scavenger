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
      <div>
        <div className="container">
        <NavigationBar auth={this.props.auth}history={this.props.history}/>
          {
            isAuthenticated() && (
          
              <div>
                <div>
                  <CreatePlay />
                </div>
              </div>
              )
              
          }
          {
            !isAuthenticated() && (
              <div className="loggedOutContainer">
                <h1 className="titleh1">Scavenger</h1>
                <h4>
                  You are not logged in! Please{' '}
                  <a style={{ cursor: 'pointer', color:'#eeeeee' }}
                    
                    onClick={this.login.bind(this)}>
                    Log In
                  </a>
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
