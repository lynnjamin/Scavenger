import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';
import ChooseGame from '../ChooseGame';
import Win from '../Win';
import NavigationBar from '../../components/NavigationBar';


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
      <div>
      <div className="container">
        <div>
          <NavigationBar auth={this.props.auth}history={this.props.history}/>
        </div>
        <div className="contentContainer">
          <title>Play</title>
          <header>
          <h1>Follow the Instructions</h1>
          </header>
        <div className ="instructionBox">
            <p>Scavenger hunt instructions</p>
        </div>
        <Link to="/chooseGame" className="playLink"><button className="chooseGameButton">Back to Choose Game</button></Link>
        </div>
      </div>
    </div>
    );
  }
}

export default Play;
