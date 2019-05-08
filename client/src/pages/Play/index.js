import React, { Component } from "react";
import history from '../../history';
import "./styles.css";
import {Link} from 'react-router-dom';
import ChooseGame from '../ChooseGame';
import Win from '../Win';


// import API from "../utils/API";
// //


class Play extends Component {

//   //new stuff to hold the state
//   //This will hold the game that is chosen to 
//   state = {
//     game : {}
//   }
//    // When this component mounts, grab the game with the _id of this.props.match.params.id
//   componentDidMount() {
//     API.getGame(this.props.match.params.id)
//       .then(res => this.setState({ game: res.data }))
//       .catch(err => console.log(err));
//   }

  render() {
    return (
      <div className="container">
      <a href="/" className="logout">logout</a>
        <title>Play</title>
        <header>
        <h1>Follow the Instructions</h1>
        </header>
        <div className ="instructionBox">
            <p>Scavenger hunts instructions</p>
            <button className="playButton"><Link to="/chooseGame">Choose Game</Link></button>
        </div>
      </div>
    );
  }
}

export default Play;
