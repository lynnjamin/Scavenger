import React from "react";
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
          <img className="firework" src="https://i.gifer.com/VZvx.gif" alt="firework"/>
          </div>
        </header>
        <h3 className="gameCompleted">{props.title} completed!</h3>
      </div>
    </div>
  );
}

export default Win;