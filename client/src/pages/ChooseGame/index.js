import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import Moment from 'react-moment';  
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';



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
        <div className="container contentContainer">
            <h1>Hunt</h1>
          <div className="mainChooseGame">
          <div className="chooseGameTitle">Choose a game by other players</div>
            <Container fluid>
              <Row>
                <Col size="md-12">
                    {this.state.games.length ? (
                      <List>
                        {this.state.games.map(game => (
                          <ListItem key={game._id}>
                            <div className="chooseGameFlexBox">
                              <Link to={"/play/" + game._id}>
                              
                                <div className="pickGameTitle">
                                  {game.title} 
                                </div>
                              </Link>
                              <div className="createdDiv">
                                created on <Moment format="DD/MM/YYYY">{game.date}</Moment> by {game.nickname}
                              </div>
                            </div>
                            <Button onClick={() => this.deleteGame(game._id)} variant="contained" color="secondary" className="chooseGameDelete">
                              Delete
                              <DeleteIcon className="chooseGameDeleteIcon" />
                            </Button>
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                        <h3>There are no games! Go create one!</h3>
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
