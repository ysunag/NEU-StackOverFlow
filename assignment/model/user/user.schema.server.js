var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = require('../question/question.schema.server');
const answerSchema = require('../answer/answer.schema.server');

const user_Schema = new Schema({
  username: String,
  email: String,
  url: String,
  _id: String
});

var userSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String
  },

  questions: [questionSchema],
  answers: [answerSchema],
  subscribe: [user_Schema],
  username: String,
  password: String,
  firstName:String,
  lastName: String,
  email: String,
  flag: String, //Student, Teacher, Guest, Admin
  url: {type: String, default: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'},
  dateCreated: {type: Date, default: Date.now()}
}, {collection:'user'});

module.exports = userSchema;
