'use strict';

import React, {Component} from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/Layout'; 
import HomePage from './views/HomePage.jsx';
import Chat from './views/Chat.jsx';
import About from './views/About.jsx';  
import Error404 from './views/404.jsx';

let user = {name: '', active: false, getName: () => this.name, setName: (n) => {this.name = n}};

class Login extends Component { 

    handleLogin(){
        user.setName(document.getElementById('username').value);
        window.location ='/realchat';
    }

    render() { 
        return ( 
            <div className="login">
                <h2>Insert your user name here:</h2>
                <input type="text" id="username" placeholder="Type here" className="message-box"/>
                <button className="let-chat send" onClick={this.handleLogin.bind(this)}>Go</button>
            </div>
        );
    }
}

class realChat extends Component {
  render(){
    return <Chat usr={userName} />;
  }
}

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage}/>  
        <Route path="about" component={About}/>
        <Redirect from="chat" to="login" />
        <Route path="realchat" component={realChat}/>
        <Route path="login" component={Login} /> 
        <Route path='*' component={Error404} />
    </Route>
  </Router>
);