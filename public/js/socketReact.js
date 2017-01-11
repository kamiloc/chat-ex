var socket = io();
var aux = 0;
var colors = ['red','blue','yellow','pink','black','orange','green','lightblue','lightgreen','grey'];
var color, users;

socket.on('welcome',function(){
    console.log('New user connect',socket.id);
    users ++;
    color = colors[Math.floor((Math.random() * 9) + 1)];
});

socket.on('message',function(m){
    var chatBox = document.getElementById('chat-box');
    if(aux < 50 ){
        chatBox.innerHTML += m;
        aux ++;
    } else {
        chatBox.innerHTML = m;
        aux = 0;
    }
});



if(window.location.pathname === '/realChat') {

    document.getElementById('send-msg').addEventListener('click',handleClick);
    document.getElementById('msgText').addEventListener('keydown',handleKeyPress);

    function handleKeyPress(e) {
            if(e.keyCode === 13) handleClick();
    }


    var msg = document.getElementById('msgText');
    var chatBox = document.getElementById('chat-box');

    function handleClick() {
        var txt = '<p class="msg"><strong style=" color: '+color+'">'+getCookie('userName')+'</strong>: '+msg.value+'</p>'; 
        socket.emit('message',txt);

        chatBox.scrollTop = chatBox.scrollHeight;
        msg.value = '';
        
    }
}