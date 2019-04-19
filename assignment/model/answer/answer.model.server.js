const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');

const answerModel = mongoose.model("answerModel", answerSchema);
const questionModel = require("../question/question.model.server");




answerModel.createAnswer = createAnswer;
answerModel.findAllAnswersForQuestion = findAllAnswersForQuestion;
answerModel.findAnswerById = findAnswerById;
answerModel.updateAnswer = updateAnswer;
answerModel.deleteAnswer = deleteAnswer;
answerModel.findAllAnswersForUser = findAllAnswersForUser;


function createAnswer(questionId,answer) {
  return answerModel.create(answer)
    .then(function(responseAnswer){
      questionModel.findQuestionById(questionId)
        .then(function(question){
          question.answers.push(responseAnswer);
          question.save();
          return question.answers;
        })
    });
}


function findAllAnswersForQuestion(questionId) {
  return answerModel.find({"questionId": questionId});
}



function findAnswerById(id) {
  return answerModel.findOne({"_id": id}).then(
    function(answer) {
      console.log(answer);
      return answer;
    }
  );
}

function findAllAnswersForUser(userId) {
  return answerModel.find({"author._id": userId}).then(
    function(answers) {
      console.log(answers);
      return answers;
    }
  );
}



function updateAnswer(answerId,answer) {
  return answerModel.findOneAndUpdate({_id: answerId}, answer, {new: true})
    .then(function (responseAnswer) {
      questionModel.update(
        { "_id" : responseAnswer.questionId, "answers._id": answerId },
        { "$set": { "answers.$": answer }},
        function(err, answer) {
          console.log(answer);
        });
      return responseAnswer;
    });
}



function deleteAnswer(answerId) {
  return answerModel.findOneAndDelete({_id: answerId})
    .then(function (responseAnswer) {
      questionModel.findOne({
        _id: responseAnswer.questionId
      })
        .then(function (question) {
          question.answers.pull({ "_id": answerId });
          question.save();
            console.log('Answer removed from question');
            return responseAnswer;
          //}
        })
        .catch(function (err) {
          console.log("remove Answer from question error:" + err);
        });
    });
}

module.exports = answerModel;

