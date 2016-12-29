'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/Layout'; 
import HomePage from './views/HomePage.jsx';
import Chat from './views/Chat.jsx';
import About from './views/About.jsx';  
import Error404 from './views/404.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage}/>
        <Route path="chat" component={Chat}/>
        <Route path="about" component={About}/> 
        <Route path='*' component={Error404} />
    </Route>
  </Router>
);