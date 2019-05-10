import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class CreatePlay extends Component {
  render() {
    return (
      <div className="container contentContainer">
        <title>Create or Play</title>
        <header>
          <h1>Scavenger</h1>
        </header>
        <button className="createButton"><Link to="/create" className="createLink">Create</Link></button>
        <br/>
        <button className="huntButton"><Link to="/chooseGame" className="playLink">Hunt</Link></button>
      </div>
    );
  }
}

export default CreatePlay;
