import React from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Create from "./pages/Create";
import Play from "./pages/Play";
import ChooseGame from "./pages/ChooseGame";
import NavigationBar from "./components/NavigationBar";


// These pages/components are protected routes, if not redirect them to home page
const auth = new Auth();
const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <NavigationBar auth={auth} history={history} />
          <Switch>
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
            <Route exact path="/home" render={(props) => {
              return (auth.isAuthenticated())
                ? <Home auth={auth} history={props.history} />
                : <Redirect to="/" />;
              }}
            /> 
            <Route exact path="/create" render={(props) => {
              return (auth.isAuthenticated())
                ? <Create auth={auth} history={props.history} />
                : <Redirect to="/" />;
              }}
            />
            <Route exact path="/play/:id" render={(props) => {
              return (auth.isAuthenticated())
                ? <Play auth={auth} history={props.history} match={props.match} />
                : <Redirect to="/" />;
              }}
            />
            <Route exact path="/choosegame" render={(props) => {
              return (auth.isAuthenticated())
                ? <ChooseGame auth={auth} history={props.history} />
                : <Redirect to="/" />;
              }}
            />
          {/* Else (no match), redirect them to home page */}
            <Route render={() =>
              <Redirect to="/" />
            }
            />

          </Switch>


        </div>
      </Router>
      
  );
}
