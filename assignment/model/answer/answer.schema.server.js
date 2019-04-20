const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_Schema = new Schema({
  username: String,
  email: String,
  url: String,
  _id: String
});

const answerSchema = mongoose.Schema({
  detail: String,
  author: user_Schema,
  questionTitle: String,
  questionId: {type: mongoose.Schema.ObjectId, ref: "question"},
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'Answers'});

module.exports = answerSchema;
