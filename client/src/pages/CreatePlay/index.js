import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class CreatePlay extends Component {
  render() {
    return (
      <div className="container">
        <title>Create or Play</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <button className="createButton"><Link to="/create">Create</Link></button>
        <br/>
        <button className="playButton"><Link to="/chooseGame">Hunt</Link></button>
      </div>
    );
  }
}

export default CreatePlay;
