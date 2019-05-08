import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

class ChooseGame extends Component {


    //new stuff to hold the state
    //This will hold the game that is chosen to 
  state = {
    game : {}
  }
//    // When this component mounts, grab the book with the _id of this.props.match.params.id
//   componentDidMount() {
//     API.getGame(this.props.match.params.id)
//       .then(res => this.setState({ game: res.data }))
//       .catch(err => console.log(err));
//   }

//function here to make each div clickable to bring the user to the instructions page


  render() {
    return (
      <div className="container">
        <title>Choose a Scavenger Hunt</title>
        <header>
        <h1>Choose a Scavenger Hunt</h1>
        </header>
        <div className ="huntsBox">
            <p>Scavenger hunts go here</p>
        </div>
        <button className="playButton"><Link to="/play">Choose Game</Link></button>
      </div>
    );
  }
}

export default ChooseGame;
