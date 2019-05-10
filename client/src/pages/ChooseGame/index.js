import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";

class ChooseGame extends Component {
//class Games extends Component {
  state = {
    games: [],
    title: "",
    date: ""
  }

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  componentDidMount() {
    API.getGames()
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err));
  }

  //function here to make each div clickable to bring the user to the instructions page
  deleteGame = id => {
    API.deleteGame(id)
      .then(res => this.loadGames())
      .catch(err => console.log(err));
  };


  render() {
    return (
      // <div className="container">
      //   <title>Choose a Scavenger Hunt</title>
      //   <header>
      //   <h1>Choose a Scavenger Hunt</h1>
      //   </header>
      //   <div className ="huntsBox">
      //       <p>Scavenger hunts go here</p>
      //   </div>
      //   <button className="playButton"><Link to="/play">Choose Game</Link></button>
      // </div>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Game List</h1>
              </Jumbotron>
              {this.state.games.length ? (
                <List>
                  {this.state.games.map(game => (
                    <ListItem key={game._id}>
                      <Link to={"/play/" + game._id}>
                        <strong>
                          {game.title} created on {game.date}
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
          </Col>
        </Row>
      </Container>
    );
  }

}

export default ChooseGame;
