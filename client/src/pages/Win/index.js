import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import "./styles.css";

import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import Moment from 'react-moment';  
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

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
            <h1>Scavenger</h1>
            <h2>You Win! </h2>
          </header>
          <h3 class="gameCompleted"><i>"title of game"</i> completed!</h3>
        </div>
      </div>
    );
  }
}

export default Win;