import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./index.css";
import App from "./App";
import CreatePlay from './pages/CreatePlay';
import Create from './pages/Create';
import Play from './pages/Play';
import ChooseGame from './pages/ChooseGame';
<<<<<<< HEAD
=======
import Win from './pages/Win';
>>>>>>> master
import registerServiceWorker from "./registerServiceWorker";

const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/createplay" component={CreatePlay} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/chooseGame" component={ChooseGame} />
          <Route exact path="/play" component={Play} />
<<<<<<< HEAD
          <Route exact path="/choosegame" component={ChooseGame} />
=======
          <Route exact path="/win" component={Win} />
>>>>>>> master
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

registerServiceWorker();