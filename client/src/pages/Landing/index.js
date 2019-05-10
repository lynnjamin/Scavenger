import React, { Component } from "react";
import { Button } from 'react-bootstrap';
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
      <div className="container descriptionContainer">
        <header>
          <h1>Scavenger</h1>
        </header>
        <div className="descriptionBox">
          <p>A build your own scavenger hunt app</p>
        </div>
        <div className="landingLogin">
        {/* buttons made with react-bootstrap don't currently go to the center of the page */}
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