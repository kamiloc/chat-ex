'use strict';

import React, {Component} from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/Layout'; 
import HomePage from './views/HomePage.jsx';
import Chat from './views/Chat.jsx';
import About from './views/About.jsx';  
import Error404 from './views/404.jsx';
import Login from './views/Login.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage}/>  
        <Route path="about" component={About}/>
        <Redirect from="chat" to="login" />
        <Route path="realchat" component={Chat}/>
        <Route path="login" component={Login} /> 
        <Route path='*' component={Error404} />
    </Route>
  </Router>
);