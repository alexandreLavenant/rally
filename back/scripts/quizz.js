require('dotenv').config();

const mongoose = require('mongoose');
const Quizz = require('../models/quizz');

const fs = require('fs').promises;
const path = require('path');

const exec = async() => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    const data = await fs.readFile(path.join(__dirname, '../data/quizz.csv'), 'utf8');
    const lines = data.split('\n');
    const questions = [];

    lines.forEach((line) => {
      const question = line.split(',');
      questions.push({
        label: question[0],
        answer: question[1]
      });
    });

    const quizz = new Quizz({
      name: 'Quizz rally 2024',
      questions
    });

    await quizz.save();
    console.log('id: ', quizz._id);

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

exec();