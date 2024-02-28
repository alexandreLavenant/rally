const express = require('express');
const cors = require('cors');
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

app.use(cors());

// Login
app.get('/api/login', async(_req, res) => {
  const teams = await Team.find({});
  res.json(teams);
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

app.put('/api/teams/:id', async(req, res) => {
  try {
    const team = req.body.team;
    await Team.findOneAndUpdate({ _id: req.params._id }, team);
    res.json({ message: 'team updated' });
  } catch(error) {
    res.status(404).json({ message: 'Not found' });
  }
});

// Quizz
app.get('/api/quizz', async(_req, res) => {
  const quizz = await Quizz.findOne({ name: process.env.QUIZZ_NAME });
  
  if (!quizz) {
    res.status(404).json({ message: 'Not found' });
    return;
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
