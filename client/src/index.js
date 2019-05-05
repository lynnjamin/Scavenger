import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import App from './App';
import CreatePlay from './components/CreatePlayPage';


const routing = (
     <Router>
       <div>
         <Switch>
           <Route exact path="/" component={App} />
           <Route exact path="/saved" component={CreatePlayPage} />
         </Switch>
       </div>
     </Router>
   )

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
