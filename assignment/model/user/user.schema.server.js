var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String
  },
  questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'question'}],
  answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'answer'}],
  subscribe: [{type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}],
  username: String,
  password: String,
  firstName:String,
  lastName: String,
  email: String,
  flag: String, //Student, Teacher, Guest, Admin
  url: {type: String, default: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'},
  dateCreated: {type: Date, default: Date.now}
}, {collection:'user'});

module.exports = userSchema;
