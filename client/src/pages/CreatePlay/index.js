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
<<<<<<< HEAD
        <button className="playButton"><Link to="/chooseGame">Hunt</Link></button>
=======
        <button className="playButton"><a href="/choosegame">Play</a></button>
        <button className="playButton"><Link to="/play">Play</Link></button>

>>>>>>> 83837a1a7fedd06d15851b9cd39d93408e993266
      </div>
    );
  }
}

export default CreatePlay;
