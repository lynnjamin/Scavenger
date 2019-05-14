import React, { Component } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Win from '../Win';

// CSS styling to override materialize
const styles = {
  root: {
    backgroundColor: "white",
    marginRight: "10px",
  },
  input: {
    color: "black",
  },
  chooseStyleButton: {
    marginTop: "30px",
  },
  submitButton: {
    marginTop: "25px"
  },
  locationButton: {
    marginLeft: "10px",
    marginTop: "25px"
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00897b' }
  },
  typography: {
    useNextVariants: true,
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { 500: '#7c0000' }
  },
  typography: {
    useNextVariants: true,
  },
});

const theme3 = createMuiTheme({
  palette: {
    primary: { main: '#1b5e20' }
  },
  typography: {
    useNextVariants: true,
  },
});

const theme4 = createMuiTheme({
  palette: {
    primary: { main: '#880e4f' }
  },
  typography: {
    useNextVariants: true,
  },
});

class Play extends Component {
  state = {
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
    },
    win: false,
    wrongGuess: false
  };

  handleChange = (event) => {
    this.setState({ answer: event.target.value, wrongGuess: false });
  }
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => {
        const { title, game } = res.data;
        this.setState({ title, cluecode: game })
        //this.setState({ game: res.data })
      })
      .catch(err => console.log(err));
  }

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
        this.handleAnswer({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
      
    }
  }

    handleAnswer = (userLocation) => {
      //Set the latitude and longitude for comparison
      const lat1 = userLocation.currentLocation.lat;
      const lon1 = userLocation.currentLocation.lng;
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

    handleSubmitCode = (event) => {
      event.preventDefault();
      //checks to see if player's answers match with creator's answers
      if (this.state.answer.toLowerCase().trim() === this.state.cluecode[this.state.codesolved].code.text.toLowerCase().trim()) {
        this.setState({codesolved: this.state.codesolved + 1, answer: "", wrongGuess: false});
      } else {
        this.setState({wrongGuess: true, answer: ""});
      } 
      // condition to get to win page
      if(this.state.codesolved + 1 >= this.state.cluecode.length){
        this.setState({win: true});
      }
    }


    render() {
      return (
        //render win page or play page
        this.state.win === true 
        ? <Win title={this.state.title} /> 
        : <div>
          <div className="container">
            <div className="contentContainer">
              <h1>Follow the Clue</h1>

              <div className="gameBox">
                <div className="titleOfGame">
                  {this.state.title}
                </div>
                <div className="playClue">
                  <strong className="clueIndicator">Clue: </strong>{this.state.cluecode[this.state.codesolved] ? this.state.cluecode[this.state.codesolved].clue : ""}
                </div>
                {
                  this.state.wrongGuess
                    ? <p>Guess again!!</p>
                    : null
                }
                <form onSubmit={this.handleSubmitCode}>
                  <MuiThemeProvider theme={theme2}>
                    <TextField
                      id="filled-with-placeholder"
                      label="Enter the code"
                      placeholder="Enter the code"
                      className={this.props.classes.root}
                      margin="normal"
                      variant="filled"
                      value={this.state.answer}
                      onChange={this.handleChange}
                    />
                  </MuiThemeProvider>

                  <MuiThemeProvider theme={theme3}>
                  <Button onClick={this.handleSubmitCode} variant="contained" color="primary" className={this.props.classes.submitButton}>
                      Submit
                  <Icon className="newIcon">send</Icon>
                    </Button>
                  </MuiThemeProvider>

                  {/* ==========================I inserted the location button here================================== */}
                  <MuiThemeProvider theme={theme4}>
                    <Button onClick={this.handleSubmitLocation} variant="contained" color="primary" className={this.props.classes.locationButton}>
                      I'm here!
                    </Button>
                  </MuiThemeProvider>
                </form>
              </div>

              <div>
                <Link to="/chooseGame" className="playLink" style={{ textDecoration: 'none' }}>
                  <MuiThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={this.props.classes.chooseStyleButton}>
                      Back to Choose Game
                    </Button>
                  </MuiThemeProvider>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default withStyles(styles)(Play);