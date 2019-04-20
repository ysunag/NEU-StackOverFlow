import {Question} from './question.model.client';
import {Author} from './author.model.client';

export class User {
  _id: String;
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  flag: String;
  subscribe: [Author];
  questions: Array<Question>;

  constructor(username, password, firstName, lastName, subscribe, questions) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subscribe = subscribe;
    this.questions = questions;
  }

}
