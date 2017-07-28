'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import HomePage from './views/HomePage';
import Chat from './views/Chat';
import About from './views/About';
import Error404 from './views/404';
import Login from './views/Login';

const PrivateRoute = ({ component: Component, rest }) => (
  <Route {...rest} render={props => (
    getCookie('userName') != '' ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


const MyRouter = () => (


  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/chat" component={Chat} />
    </div>
  </Router>
);


ReactDOM.render(<MyRouter />, document.getElementById('root'));

export default MyRouter;