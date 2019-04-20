export class Question {
  _id: String;
  userId: String;
  detail: String;
  title: String;
  questionId: String;

  constructor(_id, detail, title, questionId, uid) {
    this._id = _id;
    this.userId = uid;
    this.detail = detail;
    this.title = title;
    this.questionId = questionId;
  }

}
