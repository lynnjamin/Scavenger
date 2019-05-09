import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "./styles.css";

class NavigationBar extends Component {
  
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
      <div className="container navigation">
        <div className="row">
          <div className="col-3">
          <a href="/" className="backToStart"><h2>Scavenger</h2></a>
          </div>
          <div className="col-3">
            
          </div>
          
        <div className = "col-6">
      
            <br/>
            <Button
              bsStyle="primary"
              className="btn-margin startButton"
              onClick={this.goTo.bind(this, 'home')}
            >
              Start
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin loginButton"
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
                    bsStyle="primary"
                    className="btn-margin logoutButton"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
        </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;