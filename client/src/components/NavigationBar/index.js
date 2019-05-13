import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
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
      <div className="navigation">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/"className="backToStart">Scavenger <i className="fas fa-search"></i></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
            <Button
              variant="dark"
              className="btn-margin startButton"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
              {
                !isAuthenticated() && (
                    <Button
                      id="qsLoginBtn"
                      variant="dark"
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
                      variant="dark"
                      className="btn-margin logoutButton"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;