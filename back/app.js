const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const { Server } = require("socket.io");

mongoose.connect(process.env.DATABASE_URL,
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

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
