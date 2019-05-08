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
<<<<<<< HEAD
        <button className="playButton"><a href="/choosegame">Play</a></button>
=======
        <button className="playButton"><a href="/chooseGame">Play</a></button>
>>>>>>> master
      </div>
    );
  }
}

export default CreatePlay;

//use form (controlled components/uncontrolled)