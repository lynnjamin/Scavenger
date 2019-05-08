import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <button className="createButton"><Link to="/create">Create</Link></button>
        <br/>
        <button className="playButton"><a href="/choosegame">Play</a></button>
        <button className="playButton"><Link to="/play">Play</Link></button>

      </div>
    );
  }
}

export default CreatePlay;
