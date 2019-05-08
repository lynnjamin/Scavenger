import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from       "../../utils/API";
import { Link } from           "react-router-dom";
import { List, ListItem } from      "../../components/List";
import { Col, Row, Container } from "../../components/Grid";


class Games extends Component {
    state = {
        games: [],
        title :"",
        date: ""
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
        API.deleteGame(id)
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
                                            <Link to={"/games/" + game._id}>
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
}

export default Games;
