import React, { Component } from "react";
import "./styles.css";

class Play extends Component {
  render() {
    return (
      <div className="container">
      <a href="/" className="logout">logout</a>
        <title>Play</title>
        <header>
        <h1>Choose a Scavenger Hunt</h1>
        </header>
        <div className ="huntsBox">
            <p>Scavenger hunts go here</p>
        </div>
      </div>
    );
  }
}

export default Play;
