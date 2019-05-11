import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import NavigationBar from '../../components/NavigationBar';
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import Moment from 'react-moment';
import axios from "axios";

class ChooseGame extends Component {
  state = {
    games: [],
    title: "",
    date: "",
    nickname: "",
  }

  // When this component mounts, grab all the games from the db 
  componentDidMount() {
    this.loadGames();
  }
  
  loadGames = () => {
    API.getGames()
      .then(res => this.setState({ games: res.data })
      )
      .catch(err => console.log(err));
  }
  
  deleteGame = id => {
      API.deleteGame(id)
      .then(res => this.loadGames())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <div>
          <NavigationBar auth={this.props.auth} history={this.props.history} />
        </div>
        <div className="container contentContainer">
          <title>Choose a Scavenger Hunt</title>
          <header>
            <h1>Choose a Scavenger Hunt</h1>
          </header>
          <div className="huntsBox">
            <Container fluid>
              <Row>
                <Col size="md-12">
                    {this.state.games.length ? (
                      <List>
                        {this.state.games.map(game => (
                          <ListItem key={game._id}>
                            <Link to={"/play/" + game._id}>
                              <strong>
                                {game.title} created on <Moment format="DD/MM/YYYY">{game.date}</Moment> by {game.nickname}
                              </strong>
                            </Link>
                            <DeleteBtn onClick={() => this.deleteGame(game._id)} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                        <h3>No Results to Display</h3>
                      )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>


    );
  }

}

export default ChooseGame;
