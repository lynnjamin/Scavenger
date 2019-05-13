import React, { Component } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import ChooseGame from '../ChooseGame';
import Win from '../Win';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import NavigationBar from '../../components/NavigationBar';

class Play extends Component {
  state = {
    // game:{}
    cluecode: [],
    title: "",
    date: "",
    //codeSolved is used to keep track of how far we are into the game
    codesolved: 0,
    // answer is used to keep track of the user's code guess
    answer: "",
    //setting the standard initial latitude and longitude to austin
    currentLocation: {
      lat: 30.2672,
      lng: -97.7431
    }
  };


  handleChange = (event) => {
    this.setState({ answer: event.target.value });
    console.log(this.state.answer);
  }
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        const { title, cluecode, date } = res.data;
        this.setState({ title, cluecode, })
        //this.setState({ game: res.data })
      })
      .catch(err => console.log(err));
  }
  // handleSubmitCode = (event) => {
  //   event.preventDefault();
  //   if (this.state.answer === this.state.cluecode[this.state.codesolved].code) {
  //     console.log(this.state.codesolved);
  //     this.setState({codesolved: this.state.codesolved + 1});
  //   } else {
  //     alert('Guess Again');
  //   }
  // }

  handleSubmitLocation = (event) => {
    event.preventDefault();
    //set the state for the current location
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }
    this.handleAnswer();  
  }

  handleAnswer = () => {
    //Set the latitude and longitude for comparison
    const lat1 = this.state.currentLocation.lat;
    const lon1 = this.state.currentLocation.lng;
    const lat2 = this.state.cluecode[this.state.codesolved].code.lat;
    const lon2 = this.state.cluecode[this.state.codesolved].code.lng;
    console.log(lat1, lon1, lat2, lon2);
    //what is the distance betweem the current location and the code
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      console.log("distance:" + dist);
    }


    // if the distance is small enough, then move on to the next clue (set the minimum distance to be 1/10th of a mile)
    if (dist < .5) {
      console.log("closer than .1 miles");
      this.setState({ codesolved: this.state.codesolved + 1 });
    } else {
      alert('Not close enough.');
    }
  }


  render() {
    return (
      <div>
        <div>
          <NavigationBar auth={this.props.auth} history={this.props.history} />
        </div>
        <div className="container contentContainer">
          <title>Play</title>
          <header>
            <h1>Follow the Instructions</h1>
          </header>
          <div className="instructionBox">
            <p>Scavenger hunt instructions</p>
          </div>
          <button className="chooseGameButton"><Link to="/chooseGame" className="playLink">Back to Choose Game</Link></button>
        </div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h1>
                {this.state.title}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <p>
                  {this.state.cluecode[this.state.codesolved] ? this.state.cluecode[this.state.codesolved].clue : ""}
                  <button onClick={this.handleSubmitLocation}>
                    I'm here.
                </button>

                  {/* <form onSubmit={this.handleSubmitCode}>
                <input
                  type="text" 
                  answer ={this.state.answer}
                  onChange={this.handleChange}
                  placeholder="Enter the Code"
                />
                <input
                  type="submit"
                  value="Submit"
                /> */}
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Play;