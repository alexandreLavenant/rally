const mongoose = require ('mongoose');

module.exports = mongoose.model('Quizz', {
  name: { type: String, required: true },
  password: { type: String, required: true },
  imageUrl: String,
  quizz: [
    {
      questionId: { type: String, required: true },
      response:  String
    }
  ]
});