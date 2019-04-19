module.exports=function(app) {



  app.post("/api/question/:questionId/answer", createAnswer);
  app.get("/api/question/:questionId/answer", findAllAnswersForQuestion);
  app.get("/api/answer/:userId", findAllAnswersForUser);
  app.get("/api/answer/:answerId", findAnswerById);
  app.put("/api/answer/:answerId", updateAnswer);
  app.delete("/api/answer/:answerId", deleteAnswer);

  const answerModel = require('../model/answer/answer.model.server'); const questionModel = require('../model/question/question.model.server');

  function createAnswer(req, res){
    const questionId = req.params['questionId'];
    const answer = req.body;

    answerModel
      .createAnswer(questionId,answer)
      .then(function(answers) {
        console.log("answer created!");
        res.json(answers);
      }, function(error) {
        if (error) {
          console.log("create answer error" + error);
          res.send(error);
        }
      });
  }


  function findAllAnswersForQuestion(req, res) {
    const questionId = req.params['questionId'];

    answerModel
      .findAllAnswersForQuestion(questionId)
      .then(function (answers) {
        console.log("find answers by question id:" + answers);
        res.json(answers);
      }, function (error) {
        if (error) {
          console.log("Find answers by question id error:" + error);
          res.send(error);
        }
      });
  }

  function findAllAnswersForUser(req, res) {
    const userId = req.params['userId'];

    answerModel
      .findAllAnswersForUser(userId)
      .then(function (answers) {
        console.log("find answers by user id:" + answers);
        res.json(answers);
      }, function (error) {
        if (error) {
          console.log("Find answers by user id error:" + error);
          res.send(error);
        }
      });

  }





  function findAnswerById(req, res) {
    const answerId = req.params['answerId'];

    answerModel
      .findAnswerById(answerId)
      .then(function (answer) {
        console.log("find answer by id:" + answer);
        res.json(answer);
      }, function (error) {
        if (error) {
          console.log("Find answer by id error:" + error);
          res.send(error);
        }
      });
  }


  function updateAnswer(req, res) {
    const answerId = req.params['answerId'];
    const newAnswer = req.body;
    answerModel
      .updateAnswer(answerId, newAnswer)
      .then(function (answer) {
        console.log("answer updated!");
        answerModel
          .findAllAnswersForQuestion(answer.questionId)
          .then(function (answers) {
            console.log("find answers by question id:" +  answers);
            res.json(answers);
          }, function (error) {
            if (error) {
              console.log("Find answers by question id error:" + error);
              res.send(error);
            }
          });
      }, function (error) {
        if (error) {
          console.log("update answers error" + error);
          res.send(error);
        }
      });
  }


  function deleteAnswer(req, res) {
    const answerId = req.params['answerId'];
    answerModel.deleteAnswer(answerId)
      .then(function (answer) {
        console.log("answer removed!");
        res.json(answer);
      }, function (error) {
        if (error) {
          console.log("delete answer error" + error);
          res.send(error);
        }
      });
  }
}

