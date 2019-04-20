import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  uid: String;
  question: Question;
  questions: Array<Question>;

  errorFlag: boolean;
  errorMsg = 'Invalid question title!';

  constructor(private activeRouter: ActivatedRoute, private questionService: QuestionService, private router: Router, private sharedService: SharedService) {
    this.question = new Question('', '', '', '', '');
    this.errorFlag = false;
  }

  UpdateQuestion() {
    console.log(this.question.title);
    console.log(this.question.detail);
    if (this.question.title.length < 1 ) {
      this.errorFlag = true;
    } else {
      return this.questionService.updateQuestion(this.question._id, this.question)
        .subscribe((questions: any) => {
          this.questions = questions;
          this.router.navigate(['/question']);
        }, (error) => {
          if (error) {
            this.errorMsg = error;
            console.log(error);
            this.errorFlag = true;
          }
        });
    }
  }

  DeleteQuestion() {
    console.log(this.question.title);
    console.log(this.question.detail);
    this.activeRouter.params.subscribe(params => {
      return this.questionService.deleteQuestion(this.question._id)
        .subscribe((questions: any) => {});
    });
  }


  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = this.sharedService.user._id;
      this.question._id = params['qid'];
      this.questionService.findQuestionById(params['qid']).subscribe((question: any) => {
        if (question) {
          this.question = question;
        }
      });
      this.questionService.findQuestionsByUser(this.uid).subscribe(
        (questions: Array<Question>) => {
          if (questions) {
            this.questions = questions;
          }
        }
      );
      console.log('user id: ' + this.uid);
      console.log('question id: ' + this.question._id);
    });
  }
}
