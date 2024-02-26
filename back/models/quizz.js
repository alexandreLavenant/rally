const mongoose = require ('mongoose');

module.exports = mongoose.model('Quizz', {
  name: String,
  questions: [
    {
      label: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ]
});