import React, { Component } from 'react';
import Landing from './pages/Landing/index';
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
    return (
      <div>
            {/* must have the landing page have content but not have it transfer over to other pages 
                  potentially need switch statement*/}
            <Landing auth={this.props.auth}history={this.props.history}/>
            
      </div>
    );
  }
}

export default App;
