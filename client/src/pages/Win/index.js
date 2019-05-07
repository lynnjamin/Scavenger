import React, { Component } from "react";
import "./styles.css";

class Win extends Component {
  render() {
    return (
      <div className="container">
        <a href="/" className="logout">logout</a>
        <title>You Win!</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <h1>You Win!</h1>
      </div>
    );
  }
}

export default Win;