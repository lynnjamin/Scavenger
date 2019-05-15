import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import logo from '../../assets/landingimage.png';
import "./styles.css";

class Landing extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
    
      login() {
        this.props.auth.login();
      }
    
      logout() {
        this.props.auth.logout();
      }
    
      componentDidMount() {
        const { renewSession } = this.props.auth;
    
        if (localStorage.getItem('isLoggedIn') === 'true') {
          renewSession();
        }
      }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container landingContainer" src={logo}>
        <img className="logoPic" src={logo} alt="scAvengers" />
        <div className="descriptionBox">
          <br/>
          <p>A build your own scavenger hunt app</p>
        </div>
        <div className="landingLogin">
        {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    variant="dark"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                <Button
                variant="dark"
                className="btn-margin landingHomeButton"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>
              )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    variant="dark"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
              )
            }
          
        </div>
         
      </div>
    );
  }
}

export default Landing;