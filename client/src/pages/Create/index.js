import React, { Component } from "react";
import "./styles.css";

class Create extends Component {
  render() {
    return (
      <div className="container">
        <a href="/" className="logout">logout</a>
        <title>Create</title>
        <header>
          <h1>Create a Scavenger Hunt</h1>
        </header>
        <div className ="instructionBox">
        <p>instructions go here</p>
        </div>
      </div>
    );
  }
}

export default Create;
