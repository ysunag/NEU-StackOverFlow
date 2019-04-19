const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  detail: String,
  userId: {type: mongoose.Schema.ObjectId, ref: "userModel"},
  questionId: {type: mongoose.Schema.ObjectId, ref: "question"},
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Answers'});

module.exports = answerSchema;
