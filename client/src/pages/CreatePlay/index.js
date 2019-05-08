import React, { Component } from "react";
import "./styles.css";

class CreatePlay extends Component {
  render() {
    return (
      <div className="container">
        <a href="/" className="logout">logout</a>
        <title>Create or Play</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <button className="createButton"><a href="/create">Create</a></button>
        <br/>
        <button className="playButton"><a href="/choosegame">Play</a></button>
      </div>
    );
  }
}

export default CreatePlay;
