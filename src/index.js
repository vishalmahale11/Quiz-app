const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("../config/db");
const QuestionModel = require("../models/questions.model");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8040;

app.get("/", (req, res) => {
  res.send("Get the questions");
});

app.post("/category", async (req, res) => {
  const { category, difficulty, questionnum } = req.body;
  const new_Question = new QuestionModel({
    category,
    difficulty,
    questionnum,
  });
  await new_Question.save();
  res.send({ new_Question });
});

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
