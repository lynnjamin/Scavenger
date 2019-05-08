import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
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
      //this container currently appears on all pages
        //will have to remove it and place on potentially the home page
      //will still need home page to render on localhost:3000 instead of localhost:3000/home
        //home page currently renders the createPlay page if authenticated
      <div className="App container">
        <title>Login Scavenger</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <div className="descriptionBox">
          <p>A build your own scavenger hunt app</p>
        </div>
      
        {/* <Navbar fluid>
          <Navbar.Header> */}
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <br/>
            <Button
              bsStyle="primary"
              className="btn-margin homeButton"
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
          {/* </Navbar.Header>
        </Navbar> */}
      </div>
    );
  }
}

export default App;
