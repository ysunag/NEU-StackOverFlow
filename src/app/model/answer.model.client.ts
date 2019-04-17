export class Answer {
  _id: String;
  uid: String;
  detail: String;
  questionId: String;


  constructor(_id, detail, questionId, uid) {
    this._id = _id;
    this.uid = uid;
    this.detail = detail;
    this.questionId = questionId;
  }

}
