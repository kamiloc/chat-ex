import React from 'react'; 
import { Link } from 'react-router';

let aux;

class  Chat extends React.Component { 

    constructor(props){
        super(props);
        this.state = {usr: 'Amarilla'};
    }

     componentDidMount(){
        
         if(getCookie('userName') != ""){
            this.setState({usr: getCookie('userName') });
        } else {
            window.location = "/login";
        }

        let h = (window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight)*0.53

        document.getElementById("chat-box").style.height = h+"px";
     }

    render() {
        
        const pStyle = {width: '80%', margin: '.5% 10%',fontSize: '1.3em',textAlign: 'center'};

        return ( 
            <div className="chat">
                <p style={pStyle}>Welcome {this.state.usr}, start to chat:</p> 
                <div id="chat-box"></div>
                <input id="msgText" type="text" className="message-box" placeholder="Type your message"></input>
                <button id="send-msg" className="let-chat send">Send</button> 
                <div id="info"></div>
            </div>
          );
        
    } 
}
export default Chat;