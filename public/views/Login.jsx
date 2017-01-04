import React, { Component } from 'react';

class Login extends Component { 

    componentDidMount(){
        if(getCookie('userName') != ""){
            window.location = '/realChat';
        }
    }

    handleLogin(){
        setCookie('userName',document.getElementById('username').value,0.02);
        window.location = '/realChat';
    }

    render() { 
        return ( 
            <div className="login">
                <h2>Insert your user name here:</h2>
                <input type="text" id="username" placeholder="Type here" className="message-box"/>
                <button className="let-chat send" onClick={this.handleLogin.bind()}>Go</button>
            </div>
        );
    }
}


export default Login;