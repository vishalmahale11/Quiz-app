const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  category: { type: Number, required: true },
  difficulty: { type: String, required: true },
  questionnum: { type: Number, required: true },
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = QuestionModel;
