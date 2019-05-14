import React, { Component } from "react";
import API from "../../utils/API";
import "./styles.css";

class Win extends Component {
  state = {
    games: [],
    title: "",
    date: "",
    nickname: "",
  }

  componentDidMount() {
    this.loadGames();
  }
  
  loadGames = () => { 
    API.getGames()
      .then(res => this.setState({ games: res.data })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container contentContainer winContainer">
        <title>You Win!</title>
        <div id="winContent">
          <header>
            <div id="triangle-down">
            <h1>ScAvengers</h1>
            <h2>You Win! </h2>
            <img className="firework" src="https://i.gifer.com/VZvx.gif" alt="firework"/>
            </div>
          </header>
          <h3 className="gameCompleted"><i>"title of game"</i> completed!</h3>
        </div>
      </div>
    );
  }
}

export default Win;