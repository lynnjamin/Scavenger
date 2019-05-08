import React, { Component } from 'react';
import NavigationBar from "./components/NavigationBar";
import { Button } from 'react-bootstrap';
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
        //localhost:3000/ still needs to have this div below but it needs to go away when clicking away to another page
        //home page currently renders the createPlay page if authenticated
      <div>
            <NavigationBar auth={this.props.auth}history={this.props.history}/>
            
      </div>
    );
  }
}

export default App;
