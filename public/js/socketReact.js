var socket = io();

socket.on('welcome',function(data){
  console.log('New user connect');
  alert('Nuevo usuario, HIJO DE PUTAAA !!');
});


if(window.location.pathname === '/realChat') {

    document.getElementById('send-msg').addEventListener('click',handleClick);
    document.getElementById('msgText').addEventListener('keydown',handleKeyPress);

    var aux = {value: 0, get: function(){return this.value}, set: function(n){this.value = n}};

    function handleKeyPress(e) {
            if(e.keyCode === 13) handleClick();
    }

    function handleClick() {
        var msg = document.getElementById('msgText');
        var chatBox = document.getElementById('chat-box');
        var txt = '<p class="msg"><strong>'+getCookie('userName')+'</strong>: '+msg.value+'</p>'; 

        socket.emit('message',msg.value);

        chatBox.scrollTop = chatBox.scrollHeight;
        msg.value = '';
        
    }
}