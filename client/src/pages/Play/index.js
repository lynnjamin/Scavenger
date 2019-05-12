import React, { Component } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';
import ChooseGame from '../ChooseGame';
import Win from '../Win';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import NavigationBar from '../../components/NavigationBar';

class Play extends Component {
  state = {
    // game:{}
    cluecode: [],
    title : "",
    //codeSolved is used to keep track of how far we are into the game
    codesolved: 0,
    // answer is used to keep track of the user's code guess
    answer : ""

  };

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmitCode = this.handleSubmitCode.bind(this);
  
  handleChange = (event) => {
    this.setState({answer: event.target.value});
    console.log(this.state.answer);
  }
  // When this component mounts, grab the game with the _id of this.props.match.params.id
  // e.g. localhost:3000/game/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        const {title, game, date} = res.data;
        this.setState({title, cluecode: game})
        //this.setState({ game: res.data })
      })
      .catch(err => console.log(err));
  }
  handleSubmitCode = (event) => {
    event.preventDefault();
    if (this.state.answer === this.state.cluecode[this.state.codesolved].code) {
      console.log(this.state.codesolved);
      this.setState({codesolved: this.state.codesolved + 1});
    //  this.setState.codeSolved = this.state.codesolved + 1;
    } else {
      alert('Guess Again');
    }
  }

  render() {
    return (
      <div>

      <div className="container">
        <div>
          <NavigationBar auth={this.props.auth}history={this.props.history}/>
        </div>
        <div className="contentContainer">
          <h1>Follow the Instructions</h1>

        <div className="gameBox">
          <h2>{this.state.title}</h2>
                {this.state.cluecode[this.state.codesolved] ? this.state.cluecode[this.state.codesolved].clue : "" }
              <form onSubmit={this.handleSubmitCode}>
                <input
                  type="text" 
                  answer ={this.state.answer}
                  onChange={this.handleChange}
                  placeholder="Enter the Code"
                />
                <input
                  type="submit"
                  value="Submit"
                />
              </form>
        </div> 

              <div>
              <Link to="/chooseGame" className="playLink"><button className="chooseGameButton">Back to Choose Game</button></Link>
              </div>
        </div>
      </div>

       

      <Container fluid>
        <Row>
          <Col size="md-8">
                        



         </Col>

        </Row>
        


      </Container>
      </div>
    );
  }
}

export default Play;