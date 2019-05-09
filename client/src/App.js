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


  render() {
    console.log(this.props);
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
            <NavigationBar auth={this.props.auth}history={this.props.history}/>
            
      </div>
    );
  }
}

export default App;
