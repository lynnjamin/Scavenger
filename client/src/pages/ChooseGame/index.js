import React, { Component } from "react";
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import "./styles.css";

class ChooseGame extends Component {


    //new stuff to hold the state
    //This will hold the game that is chosen to 
  state = {
    game : {}
  }
//    // When this component mounts, grab the book with the _id of this.props.match.params.id
//   componentDidMount() {
//     API.getGame(this.props.match.params.id)
//       .then(res => this.setState({ game: res.data }))
//       .catch(err => console.log(err));
//   }

//function here to make each div clickable to bring the user to the instructions page


  render() {
    return (
      <div className="container">
        <title>Choose a Scavenger Hunt</title>
        <header>
        <h1>Choose a Scavenger Hunt</h1>
        </header>
        <div className ="huntsBox">
            <p>Scavenger hunts go here</p>
        </div>
        <button className="playButton"><Link to="/play">Choose Game</Link></button>
      </div>
    );
  }
=======
import Jumbotron from               "../../components/Jumbotron";
import { List, ListItem } from      "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Link } from           "react-router-dom";

class Games extends Component {
    //This will hold the game that is chosen to 
    state = {
        game: {}
    }

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        API.getGames()
            .then(res =>
                this.setState({ games: res.data, title: "", date: "" })
            )
            .catch(err => console.log(err));
    };

    deleteGame = id => {
        API.deleteBook(id)
            .then(res => this.loadGames())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What Game Do you want to Play?</h1>
                        </Jumbotron>

                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1>Game List</h1>
                            </Jumbotron>
                            {this.state.games.length ? (
                                <List>
                                    {this.state.games.map(game => (
                                        <ListItem key={game._id}>
                                            <Link to={"/books/" + game._id}>
                                                <strong>
                                                    {game.title} by {game.author}
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
>>>>>>> 83837a1a7fedd06d15851b9cd39d93408e993266
}

export default Games;
