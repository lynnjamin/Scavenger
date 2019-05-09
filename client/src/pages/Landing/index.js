import React, { Component } from "react";
import "./styles.css";

class Landing extends Component {
  render() {
    return (
      <div className="container descriptionContainer">
        <header>
          <h1>Scavenger</h1>
        </header>
        <div className="descriptionBox">
          <p>A build your own scavenger hunt app</p>
        </div>
        
      </div>
    );
  }
}

export default Landing;