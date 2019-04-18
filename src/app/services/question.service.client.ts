import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question.model.client';

@Injectable()
export class QuestionService {


  constructor(private http: HttpClient) {}

  api = { 'createQuestion' : this.createQuestion,
    'findQuestionsByUser' : this.findQuestionsByUser,
    'findAnsweredQuestionsByUser' : this.findAnsweredQuestionsByUser,
    'findQuestionById' : this.findQuestionById,
    'updateQuestion' : this.updateQuestion,
    'deleteQuestion' : this.deleteQuestion
  };


  baseUrl = environment.baseUrl;


  createQuestion(userId, question) {
    const newQuestion = {title: question.title, detail: question.detail, userId: userId};
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/question', newQuestion).pipe(
      map((response) => {
        return response;
      }));
  }

  findQuestionsByUser(userId) {
    return this.http.get<Array<Question>>(this.baseUrl + '/api/user/' + userId + '/question').pipe(
      map((response) => {
        return response;
      }));
  }

  findAnsweredQuestionsByUser(userId) {
    return this.http.get<Array<Question>>(this.baseUrl + '/api/user/' + userId + '/answeredQuestion').pipe(
      map((response) => {
        return response;
      }));
  }

  findQuestionById(questionId) {
    return this.http.get<Question>(this.baseUrl + '/api/question/' + questionId).pipe(
      map((response) => {
        return response;
      }));
  }

  updateQuestion(questionId, question) {
    return this.http.put(this.baseUrl + '/api/question/' + questionId, question).pipe(
      map((response) => {
        return response;
      }));
  }


  deleteQuestion(questionId) {
    return this.http.delete(this.baseUrl + '/api/question/' + questionId).pipe(
      map((response) => {
        return response;
      }));
  }

}
