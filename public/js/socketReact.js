var socket = io.connect();
socket.on('welcome',function(data){
  console.log('a user connect');
});

socket.on('message',function(msg){

});

if(window.location.pathname === '/realChat') {
  
    document.getElementById('send-msg').addEventListener('click',handleClick);
    document.getElementById('msgText').addEventListener('keydown',handleKeyPress);
    var aux;

    function handleKeyPress(e) {
            if(e.keyCode === 13) handleClick();
    }

    function handleClick() {
        var msg = document.getElementById('msgText');
        var chatBox = document.getElementById('chat-box');
        var txt = '<p class="msg"><strong>'+getCookie('userName')+'</strong>: '+msg.value+'</p>'; 

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
}