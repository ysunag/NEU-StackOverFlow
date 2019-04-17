const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');

const questionModel = mongoose.model("question",questionSchema);
const userModel = require("../user/user.model.server");
const answerModel = require("../answer/answer.model.server");



questionModel.createQuestionForUser = createQuestionForUser;
questionModel.findAllQuestionsForUser = findAllQuestionsForUser;
questionModel.findQuestionById = findQuestionById;
questionModel.findAnsweredQuestionForUser = findAnsweredQuestionForUser;
questionModel.updateQuestion = updateQuestion;
questionModel.deleteQuestion = deleteQuestion;

module.exports = questionModel;




function createQuestionForUser(userId,question) {
  return questionModel.create(question)
    .then(function(responseQuestion){
      userModel.findUserById(userId)
        .then(function(user){
          user.Questions.push(responsequestion);
          user.save();
        })
    });
}

function findAnsweredQuestionForUser(userId) {
  return answerModel.find({"userId": userId})
    .then(function (answers) {
      let questions = [];
      while(answers.hasNext()) {
        const question = findquestionById(answers.next().questionId);
        questions.push(question);
      }
      return questions;
  })
    .catch(function (err) {
      console.log("findAnsweredQuestionForUser error:" + err);
    });
}



function findAllQuestionsForUser(userId) {
  return questionModel.find({"userId": userId})
    .populate('userId', 'username')
    .exec();
}



function findQuestionById(id) {
  return questionModel.findOne({_id: id});
}



function updateQuestion(questionId,question) {
  return questionModel.findOneAndUpdate({_id: questionId},question, {new: true})
    .then(function (responseQuestion) {
      userModel.update(
        { "_id" : responseQuestion.userId, "questions._id": questionId },
      { "$set": { "questions.$": question }},
      function(err, question) {
        console.log(question);
      });
      return responseQuestion;
    });
}



function deleteQuestion(questionId) {
  return questionModel.findOneAndDelete({_id: questionId})
    .then(function (responseQuestion) {
      userModel.findOne({
        _id: responseQuestion.userId
      })
        .then(function (user) {
          user.questions.pull({ _id: questionId });
          user.save();
            console.log('question removed from user');
            return responseQuestion;
          //}
        })
        .catch(function (err) {
          console.log("remove question from user error:" + err);
        });
    });
}
