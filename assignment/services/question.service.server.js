module.exports=function(app) {


  app.get("/api/user/:userId/question", findQuestionForUser);
  app.get("/api/user/:userId/answeredQuestion", findAnsweredQuestionForUser);
  app.post("/api/user/:userId/question", createQuestion);
  app.delete("/api/question/:questionId", deleteQuestion);
  app.get("/api/question/:questionId", findQuestionById);
  app.put("/api/question/:questionId", updateQuestionById);

  const questionModel = require('../model/question/question.model.server');


  function findQuestionById(req, res) {
    const questionId = req.params['questionId'];

    questionModel
      .findQuestionById(questionId)
      .then(function(question) {
        console.log("find question by id:" + question);
        res.json(question);
      }, function(error) {
        if (error) {
          console.log("Find question by id error:" + error);
        }
      });

  }



  function findQuestionForUser(req, res) {
    const userId = req.params['userId'];

    questionModel
      .findAllQuestionsForUser(userId)
      .then(function(questions) {
        console.log("find questions by user id:" + questions);
        res.json(questions);
      }, function(error) {
        if (error) {
          console.log("Find questions by user id error:" + error);
          res.send(error);
        }
      });

  }

  function findAnsweredQuestionForUser (req, res) {
    const userId = req.params['userId'];

    questionModel
      .findAnsweredQuestionForUser(userId)
      .then(function(questions) {
        console.log("find answered questions by user id:" + questions);
        res.json(questions);
      }, function(error) {
        if (error) {
          console.log("Find answered questions by user id error:" + error);
          res.send(error);
        }
      });

  }




  function createQuestion(req, res){
    const userId = req.params['userId'];
    const question = req.body;

    questionModel
      .createQuestionForUser(userId,question)
      .then(function(questions) {
        console.log("question created!");
        res.json(questions);
      }, function(error) {
        if (error) {
          console.log("create question error" + error);
          res.send(error);
        }
      });
  }



  function updateQuestionById(req, res){
    const questionId = req.params['questionId'];
    const newQuestion = req.body;

    questionModel
      .updateQuestion(questionId,newQuestion)
      .then(function(question) {
        console.log("question updated!");
        questionModel
          .findAllQuestionsForUser(question.userId)
          .then(function(questions) {
            console.log("find questions by user id:" + questions);
            res.json(questions);
          }, function(error) {
            if (error) {
              console.log("Find questions by user id error:" + error);
              res.send(error);
            }
          });
      }, function(error) {
        if (error) {
          console.log("update question error" + error);
          res.send(error);
        }
      });
  }




  function deleteQuestion(req, res) {
    const questionId = req.params['questionId'];
    questionModel.deleteQuestion(questionId)
      .then(function (question) {
        console.log("question removed!");
        res.json(question);
      }, function (error) {
        if (error) {
          console.log("delete question error" + error);
          res.send(error);
        }
      });
  }
}
