const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const PORT = 4000;

const mongoose = require('mongoose');
require('dotenv').config();

const Team = require('./models/team');
const Quizz = require('./models/quizz');

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

// Teams
app.get('/api/teams', async(_req, res) => {
  const teams = await Team.find({});
  res.json(teams);
});

app.get('/api/teams/:id', async(req, res) => {
  const team = await Team.findOne({ _id: req.params.id });

  if (!team) {
    res.sendStatus(404);
  }

  res.json(team);
});

// Quizz
app.get('/api/quizz/:id', async(req, res) => {
  const quizz = await Quizz.findOne({ _id: req.params.id });

  if (!quizz) {
    res.sendStatus(404);
  }

  res.json(quizz);
});

io.on('connection', () => {
  console.log('a user connected');

  socket.on('location', (msg) => {
    // socket.broadcast.emit(msg);
    console.log('message: ' + msg);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
