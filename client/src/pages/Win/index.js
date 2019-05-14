import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

  const Win = (props) => {
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
          <h3 className="gameCompleted"><i>{props.title}</i> completed!</h3>
          <h4 className="universeSaved"> You Saved the Universe!</h4>
          <Link to="/chooseGame" className="chooseAnother"><p>Do another scavenger hunt <i class="fas fa-arrow-circle-right"></i></p></Link>
        </div>
      </div>

  );
}

export default Win;
