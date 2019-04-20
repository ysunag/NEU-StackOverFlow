module.exports = function (app){
  require("./services/user.service.server")(app);
  require("./services/answer.service.server")(app);
  require("./services/question.service.server")(app);

}
