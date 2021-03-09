import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import SignInRegister from 'pages/SignInRegister';
import Dashboard from 'pages/Dashboard';
import { Store } from 'Store';


const RouterWrapper: React.FC = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

const Routes: React.FC<RouteComponentProps> = () => {
  const { state } = React.useContext(Store);
  console.log(state)
  const [loggedIn] = useState<boolean>(false);
  if (state.isLogged) {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from='/*' to='/dashboard' />
        </Switch>
      </React.Fragment>
    )
  } else {
    return (
      <Switch>
        <Route path="/" component={SignInRegister} exact />
        <Redirect from='/*' to='/' />
      </Switch>
    )
  }
};

export default RouterWrapper
