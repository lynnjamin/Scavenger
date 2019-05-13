import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import history from '../../history';
import NavigationBar from '../../components/NavigationBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./styles.css";

const styles = {
  root: {
    backgroundColor: "white",
    marginRight: "10px",
  },
  input: {
    color: "black",
  },
  containedPrimary: {
    marginLeft: "20px",
  },
  submitButton: {
    marginLeft: "100px",
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#093E0A' }
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#9e9d24' }
  },
});

const theme3 = createMuiTheme({
  palette: {
    primary: { main: '#3e2723' }
  },
});class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      clue: [{ value: "" }],
      code: [{ value: "" }]
    };
  }

    componentDidMount(){
    axios.get("/api/users/" + window.localStorage.sub)
    .then(response => {
      console.log(response)
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    const { title, clue, code } = this.state;
  };

  // Title Handler
  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };


  // Change Handler
  handleClueChange = idx => e => {
    const newClue = this.state.clue.map((clue, sidx) => {
      if (idx !== sidx) return clue;
      return { ...clue, value: e.target.value };
    });
    this.setState({ clue: newClue });
  };


  handleCodeChange = idx => e => {
    const newCode = this.state.code.map((code, sidx) => {
      if (idx !== sidx) return code;
      return { ...code, value: e.target.value };
    });
    this.setState({ code: newCode });
  };

 
  // Add Handler
  handleAddClueandCode = () => {
    this.setState(
      {
      clue: this.state.clue.concat([{ value: "" }]),
      code: this.state.code.concat([{ value: "" }])
    });
  };

  // Remove Handler
  handleRemoveClueAndCode = idx => () => {
    this.setState({
      clue: this.state.clue.filter((s, sidx) => idx !== sidx),
      code: this.state.code.filter((s, sidx) => idx !== sidx)
    });
  };
  
//////////////////////
// POST to database //
//////////////////////
  saveGame = e => {
    e.preventDefault();
    const title = this.state.title;
    const game = []
    for(let i =0; i < this.state.clue.length; i++){
      let clue = this.state.clue[i].value;
      let code = this.state.code[i].value;
      game.push({ clue: clue, code: code})
    }
    axios.request({ 
      method: 'get',
      url: "/api/users/" + window.localStorage.sub
    })
    .then(function (response) {
      const newGame = {
        title: title,
        game: game,
        createdBy: window.localStorage.sub,
        nickname: response.data[0].nickname
     };
      axios.request({ 
      method: 'post',
      url: "/api/games",
      data: newGame,
    }).then((response) => {
      console.log(response.config.data);
      history.replace('/home');
    }).catch((error) => {
        console.log(error);
    });
  })
  }

  render() {
    return (
    <div>

      <div className="container">
      <NavigationBar auth={this.props.auth}history={this.props.history}/>
      <div className="createGame">
        <h1>Create a Game</h1>
      </div>
        <div className="createContainer">
          <h5>Title</h5>
          <form onSubmit={this.handleSubmit}>
          <MuiThemeProvider theme={theme}>
          <TextField
            required
            id="filled-required"
            label="Required"
            className={this.props.classes.root}
            margin="normal"
            variant="filled"
          />
          </  MuiThemeProvider>
         
          <br/><br/>
            <h5>Clue and Code</h5>
            {this.state.clue.map((clue, idx) => (
              <div className="clueinput">
              <MuiThemeProvider theme={theme}>
                <TextField
                  id="outlined-textarea"
                  label="Enter clue here"
                  multiline
                  className={this.props.classes.root}
                  margin="normal"
                  variant="filled"
                  placeholder={`Clue #${idx + 1}`}
                  value={this.state.clue[idx].value}
                  onChange={this.handleClueChange(idx)}
                  required
                />

                <TextField
                  id="outlined-textarea"
                  label="Enter code here"
                  multiline
                  className={this.props.classes.root}
                  margin="normal"
                  variant="filled"
                  placeholder={`Code #${idx + 1}`}
                  value={this.state.code[idx].value}
                  onChange={this.handleCodeChange(idx)}
                  required
                />  
              </MuiThemeProvider>
            

                <IconButton onClick={this.handleRemoveClueAndCode(idx)} className="trashcanButton" aria-label="Delete">
                <DeleteIcon />
                </IconButton>
              </div>
            ))}


              <MuiThemeProvider theme={theme2}>
                  <Fab 
                    color="primary" 
                    aria-label="Add" 
                    className={this.props.classes.fabButton}
                    onClick={this.handleAddClueandCode}
                    size="small"
                    >
                  <AddIcon />
                  </Fab>
              </MuiThemeProvider>

              <MuiThemeProvider theme={theme3}>
                  <Button onClick={this.onSave} variant="contained" color="primary" className={this.props.classes.submitButton}>
                    Send
                    <Icon className="newIcon">send</Icon>
                  </Button>
              </MuiThemeProvider>


          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(InputForm);
