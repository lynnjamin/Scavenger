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
            </div>
            <div className="row gifRow">
              <div className="col-4">
                <img className="gauntlet1"src="https://media.giphy.com/media/fnpxKUa2yhrUabpxdC/giphy.gif" alt="Infinity Gauntlet"/>
              </div>
              <div className="col-4">
                <img className="firework" src="https://i.gifer.com/VZvx.gif" alt="firework"/>
              </div>
              <div className="col-4">
                <img className="gauntlet2"src="https://media.giphy.com/media/26VjwfLk7CRslWHSWI/giphy.gif" alt="Infinity Gauntlet2"/>
              </div>
            </div>
          </header>
          <h3 className="gameCompleted"><i>"title of game"</i> completed!</h3>
          <h4 className="universeSaved"> You Saved the Universe!</h4>
        </div>
      </div>
    );
  }
}

export default Win;