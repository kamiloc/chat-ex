var socket = io();
var aux = 0;

socket.on('welcome',function(){
    console.log('New user connect',socket.id);
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

    var chatBox = document.getElementById('chat-box');

    function handleKeyPress(e) {
            if(e.keyCode === 13) handleClick();
    }

    function handleClick() {
        var msg = document.getElementById('msgText');
        var txt = '<p class="msg"><strong>'+getCookie('userName')+'</strong>: '+msg.value+'</p>'; 

        socket.emit('message',txt);

        chatBox.scrollTop = chatBox.scrollHeight;
        msg.value = '';
        
    }
}