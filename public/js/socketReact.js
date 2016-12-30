var socket = io.connect();
socket.on('connection', function(socket){
  console.log('a user connected');
});