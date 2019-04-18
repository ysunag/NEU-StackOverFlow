const mongoose = require('mongoose');
const AnswerSchema = require('../answer/answer.schema.server');

const questionSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.ObjectId, ref: "User"},
  detail: String,
  title: String,
  answers: [AnswerSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Questions'});

module.exports = questionSchema;
