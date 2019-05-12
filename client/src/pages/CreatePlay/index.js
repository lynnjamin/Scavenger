import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from 'react-bootstrap/Button'

class CreatePlay extends Component {
  render() {
    return (
      <div className="container contentContainer">
        <title>Create or Play</title>
        <header>
          <h1 className="titleh1">Scavenger</h1>
        </header>
        <p className="def">Create a Scavenger hunt of your own or play one that's already been created. </p>
        <Link to="/create" className="createLink"><Button variant="dark" className="btn-margin createButton">Create</Button></Link>
        <br/>
        <Link to="/chooseGame" className="playLink"><Button variant="dark" className="btn-margin huntButton">Hunt</Button></Link>
      </div>
    );
  }
}

export default CreatePlay;
