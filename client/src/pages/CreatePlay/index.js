import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class CreatePlay extends Component {
  render() {
    return (
      <div className="container contentContainer">
        <title>Create or Play</title>
        <header>
          <h1 className="titleh1">Scavenger</h1>
        </header>
        <p>Create a Scavenger hunt of your own or play one that's already been created. </p>
        <Link to="/create" className="createLink"><button className="createButton">Create</button></Link>
        <br/>
        <Link to="/chooseGame" className="playLink"><button className="huntButton">Hunt</button></Link>
      </div>
    );
  }
}

export default CreatePlay;
