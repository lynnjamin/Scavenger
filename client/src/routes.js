import React from 'react';
import { Route, Router} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Create from "./pages/Create";
import Play from "./pages/Play";
import ChooseGame from "./pages/ChooseGame";

import NavigationBar from "./components/NavigationBar";

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
          {/* <Route path="/" render={(props) => <NavigationBar auth={auth} {...props} />} /> */}
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route exact path="/create" render={(props) => <Create auth={auth} {...props} />} />
          <Route exact path="/play/:id" render={(props) => <Play auth={auth} {...props} />} />
          <Route exact path="/choosegame" render={(props) => <ChooseGame auth={auth} {...props} />} />

        </div>
      </Router>
  );
}

