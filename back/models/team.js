const mongoose = require ('mongoose');

module.exports = mongoose.model('Team', {
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