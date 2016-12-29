import React from 'react'; 
import { Link } from 'react-router';

let aux;

class  Chat extends React.Component { 
    constructor(){
        super();
        this.state= {usr: 'kamiloC'};
    }
    
     componentDidMount(){
        let h = (window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight)*0.53

        document.getElementById("chat-box").style.height = h+"px";
    }

    handleClick(){
        let msg = document.getElementById('msgText');
        let chatBox = document.getElementById('chat-box');
        let txt = `<p class="msg"><strong>${this.state.usr}</strong>: ${msg.value}</p>`; 

        if(aux <= 50) {
            chatBox.innerHTML+= txt;
            aux++;
        } else{
            chatBox.innerHTML = txt;
            aux = 0;
        }

        chatBox.scrollTop = chatBox.scrollHeight;
        msg.value = '';
        
    }

    handleKeyPress(e){
        if(e.keyCode === 13) this.handleClick();
    }

    render() {
        
        const pStyle = {width: '80%', margin: '.5% 10%',fontSize: '1.3em',textAlign: 'center'};

        return ( 
            <div className="chat">
                <p style={pStyle}>Welcome {this.state.usr}, start to chat:</p> 
                <div id="chat-box"></div>
                <input id="msgText" type="text" className="message-box" onKeyDown={this.handleKeyPress.bind(this)} placeholder="Type your message"></input>
                <Link to="chat"> 
                    <button className="let-chat send" onClick={this.handleClick.bind(this)}>Send</button> 
                </Link>                  
            </div>
          );
        
    } 
}
export default Chat;