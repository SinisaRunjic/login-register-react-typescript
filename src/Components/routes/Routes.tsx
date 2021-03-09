import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import SignInRegister from 'pages/SignInRegister';
import Home from 'pages/Home';
import { Store } from 'Store';
import Layout from 'components/Layout'


const RouterWrapper: React.FC = () => (
  <Router>
    <Route component={Routes} />
  </Router>
);

const Routes: React.FC<RouteComponentProps> = () => {
  const { state } = React.useContext(Store);
  if (true) {
    return (
    <Layout>
      <Switch>
        <Route path="/home" component={Home} exact={true}/>
        <Route exact path="/*" component={() => <Redirect to="/home" />} />
      </Switch>
    </Layout>
    )
  } else {
    return (
      <Switch>
        <Route path="/" component={SignInRegister} exact />
        <Route exact path="/*" component={() => <Redirect to="/" />} />
      </Switch>
    )
  }
};

export default RouterWrapper
