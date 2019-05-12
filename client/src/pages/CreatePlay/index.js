import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    primary: { main: '#5d4037' }
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#ffb300' }
  },
});

class CreatePlay extends Component {
  render() {
    return (
      <div className="container contentContainer">
        <title>Create or Play</title>
        <header>
          <h1 className="titleh1">Scavenger</h1>
        </header>
        <p className="def">Create a Scavenger hunt of your own or play one that's already been created. </p>
        <Link to="/create" className="createLink">
        <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className="createButton">
        Create 
        </Button>
        </MuiThemeProvider>
        </Link>
        <br/>
        <Link to="/chooseGame" className="playLink">
        <MuiThemeProvider theme={theme2}>
        <Button variant="contained" color="primary" className="huntButton">
        Hunt
        </Button>
        </MuiThemeProvider>
        </Link>
      </div>
    );
  }
}

export default CreatePlay;
