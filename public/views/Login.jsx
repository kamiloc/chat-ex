import React, { Component } from 'react';
import Header from '../common/Header';

class Login extends Component {

    handleLogin() {
        setCookie('userName', document.getElementById('username').value, 0.02);
        window.location = '/chat';
    }

    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <h2>Insert your user name here:</h2>
                    <input type="text" id="username" placeholder="Type here" className="message-box" />
                    <button className="let-chat send" onClick={this.handleLogin}>Go</button>
                </div>
            </div>
        );
    }
}


export default Login;