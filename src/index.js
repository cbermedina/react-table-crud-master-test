import { ApolloProvider} from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ClientService from './services/client.service'
import "./css/styles.css";
import User from './components/user/user';
import UpdateUser from './components/user/updateUser'

const Root = () => (
  <Router>
  <ApolloProvider client={ClientService}>
    <div className="container">
    <Switch>
        <Route exact path="/">
          <User/>
        </Route>
        <Route path="/edit">
          <UpdateUser />
        </Route>
      </Switch>
    </div>
  </ApolloProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));