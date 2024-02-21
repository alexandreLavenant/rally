const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

io.on('connection', () => {
  console.log('a user connected');

  socket.on('location', (msg) => {
    // socket.broadcast.emit(msg);
    console.log('message: ' + msg);
  });
});

server.listen(3000, () => {
  console.log('listening on 3000');
});
