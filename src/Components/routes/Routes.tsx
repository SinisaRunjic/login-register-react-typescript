import React from 'react'
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
import Layout from 'components/Layout'


const RouterWrapper: React.FC = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

const Routes: React.FC<RouteComponentProps> = () => {
  const { state } = React.useContext(Store);
  if (state.isLogged) {
    return (
    <Layout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact/>
        <Redirect from='*' to='/dashboard' />
      </Switch>
    </Layout>
    )
  } else {
    return (
      <Switch>
        <Route path="/" component={SignInRegister} exact />
        <Redirect from='*' to='/' />
      </Switch>
    )
  }
};

export default RouterWrapper
