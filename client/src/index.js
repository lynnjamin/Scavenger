import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./index.css";
import App from "./App";
import CreatePlay from './pages/CreatePlay';
import Create from './pages/Create';
import Play from './pages/Play';
import ChooseGame from './pages/ChooseGame';
import Win from './pages/Win';
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();


ReactDOM.render(
  routes,
  document.getElementById('root')
);
