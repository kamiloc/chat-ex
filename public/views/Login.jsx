import React, { Component } from 'react';

class Login extends Component { 
    render() { 
        return ( 
            <div className="login">
                <h2>Insert your user name here:</h2>
                <input type="text" id="username" placeholder="Type here" className="message-box"/>
                <button className="let-chat send">Go</button>
            </div>
        );
    }
}


export default Login;