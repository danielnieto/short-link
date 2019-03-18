import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Signup from './imports/ui/Signup';
import Link from './imports/ui/Link';
import NotFound from './imports/ui/NotFound';
import Login from './imports/ui/Login';

const routes = (
  <Router>
    <Switch>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Link}/>
      <Route exact path="/" component={Login}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);

import './main.html';

Meteor.startup(()=> {
  ReactDOM.render(routes, document.getElementById('app'));
})