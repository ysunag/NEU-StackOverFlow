import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Answer} from '../model/answer.model.client';


@Injectable()
export class AnswerService {

  constructor(private http: HttpClient) {}

  api = { 'createAnswer' : this.createAnswer,
    'findAnswerByQuestionId' : this.findAnswerByQuestionId,
    'findAnswerById' : this.findAnswerById,
    'updateAnswer' : this.updateAnswer,
    'deleteAnswer' : this.deleteAnswer
  };


  baseUrl = environment.baseUrl;

  createAnswer(questionId, answer)  {
    const newAnswer = {detail: answer.detail, questionId: questionId, uid: answer.uid};
    return this.http.post(this.baseUrl + '/api/question/' + questionId + '/answer', newAnswer).pipe(
      map((response) => {
        return response;
      }));
  }

  findAnswerByQuestionId(questionId)  {
    return this.http.get<Array<Answer>>(this.baseUrl + '/api/question/' + questionId + '/answer').pipe(
      map((response) => {
        return response;
      }));
  }

  findAnswerById(answerId)  {
    return this.http.get<Answer>(this.baseUrl + '/api/answer/' + answerId).pipe(
      map((response) => {
        return response;
      }));
  }
  updateAnswer(answerId, answer)  {
    return this.http.put(this.baseUrl + '/api/answer/' + answerId, Answer).pipe(
      map((response) => {
        return response;
      }));
  }

  deleteAnswer(answerId) {
    return this.http.delete(this.baseUrl + '/api/answer/' + answerId).pipe(
      map((response) => {
        return response;
      }));
  }
}
