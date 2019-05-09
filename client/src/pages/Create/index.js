import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import history from '../../history';

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      clue: [{ value: "" }],
      code: [{ value: "" }]
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, clue, code } = this.state;
    console.log("added: ", title, clue, code);
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
    const game = []
    for(let i =0; i < this.state.clue.length; i++){
      let clue = this.state.clue[i].value;
      let code = this.state.code[i].value;
      game.push({ clue: clue, code: code})
    }
    const newGame = {
      title: this.state.title,
      game: game
    }
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
  }


  render() {
    return (
      // <div className="container"> 
      //   { isAuthenticated() ? 
      //     <div>
      //       <title>Create</title>
      //       <header>
      //         <h1>Create a Scavenger Hunt</h1>
      //       </header>
      //       <div className ="instructionBox">
      //         <p>instructions go here</p>
      //       </div>
    <div className="container">
      <h5>Title</h5>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title is required"
          value={this.state.title}
          onChange={this.handleTitleChange}
          required
        />
      
        <h5>Clue and Code</h5>
        {this.state.clue.map((clue, idx) => (
          <div className="clueinput">
            <input
              type="text"
              placeholder={`Clue #${idx + 1}`}
              value={this.state.clue[idx].value}
              onChange={this.handleClueChange(idx)}
              required
            />
              <input
              type="text"
              placeholder={`Code #${idx + 1}`}
              value={this.state.code[idx].value}
              onChange={this.handleCodeChange(idx)}
              required
            />
            <button
              type="button"
              onClick={this.handleRemoveClueAndCode(idx)}
              className="small"
              >
              Delete
            </button>
          </div>
        ))}



        <button
          type="button"
          onClick={this.handleAddClueandCode}
          className="small"
        >
          Add Clue and Code
        </button>
        <button onClick={this.saveGame}>Submit</button>
      </form>
    </div>
    );
  }
}

export default InputForm;

