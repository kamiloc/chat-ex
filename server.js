'use strict';

const PORT = process.env.PORT || 3000;

import express from 'express';
import io from 'socket.io';


let app = express();
let folder = __dirname + '/build';

app.use(express.static(folder));


app.get('/*', function (req, res) {
  res.sendFile(folder + '/index.html');
});

const server = app.listen(PORT, function () {
  console.log('The Aplication is now listening at http://localhost:%s', PORT);
});

let socket = io(server);

socket.on('connection', (sock) => {
  sock.emit('welcome');

  sock.on('message', function (msg) {
    socket.emit('message', msg);
  });
});
