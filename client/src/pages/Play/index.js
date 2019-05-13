import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';
import API from "../../utils/API";
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


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
  }
};

const theme2 = createMuiTheme({
  palette: {
    primary: { 500: '#7c0000' }
  },
  typography: {
    useNextVariants: true,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00897b' }
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
class Play extends Component {
  state = {
    // game:{}
    cluecode: [],
    title : "",
    //codeSolved is used to keep track of how far we are into the game
    codesolved: 0,
    // answer is used to keep track of the user's code guess
    answer : "",
    wrongGuess: false,
  };

  handleChange = (event) => {
    this.setState({answer: event.target.value, wrongGuess: false});
    console.log(this.state.answer);
  }
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log("what is this?", this.props);
    API.getGame(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        const {title, game} = res.data;
        this.setState({title, cluecode: game})
        //this.setState({ game: res.data })
      })
      .catch(err => console.log(err));
  }
  handleSubmitCode = (event) => {
    event.preventDefault();
    if (this.state.answer.toLowerCase().trim() === this.state.cluecode[this.state.codesolved].code.toLowerCase().trim()) {
      console.log("answer :", this.state.cluecode[this.state.codesolved].code)
      console.log("something: ", this.state.codesolved);
      this.setState({codesolved: this.state.codesolved + 1, answer: "", wrongGuess: false});
    //  this.setState.codeSolved = this.state.codesolved + 1;
    } else {
      this.setState({wrongGuess: true, answer: ""});
    }
  }



  render() {
    return (
    <div>
      <div className="container">
        <div className="contentContainer">
          <h1>Follow the Clue</h1>
          <h1>Guess the Code!</h1>

        <div className="gameBox">
          <div className="titleOfGame">
            {this.state.title}
          </div>
            <div className="playClue">
                {this.state.cluecode[this.state.codesolved] ? this.state.cluecode[this.state.codesolved].clue : "" }
            </div>

          {
            this.state.wrongGuess
              ? <p>Wrong</p>
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