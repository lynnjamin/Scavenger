import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <title>Login Scavenger</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <div className="descriptionBox">
          <p>A build your own scavenger hunt app</p>
        </div>
        <button className="loginButton"><a href="/createplay">Login</a></button>
      </div>
    );
  }
}

export default App;
