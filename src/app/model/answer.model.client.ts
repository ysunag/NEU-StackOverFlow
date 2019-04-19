import {Author} from './author.model.client';

export class Answer {
  _id: String;
  author: Author;
  detail: String;
  questionId: String;
  questionTitle: String;


  constructor(_id, detail, questionId, author, questionTitle) {
    this._id = _id;
    this.author = author;
    this.detail = detail;
    this.questionId = questionId;
    this.questionTitle = questionTitle;
  }

}
