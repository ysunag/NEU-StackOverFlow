import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  uid: String;
  question: Question = new Question('', '', '', '', '');
  questions: Array<Question>;

  errorFlag: boolean;
  errorMsg = 'Invalid question name!';

  constructor(private activateRouter: ActivatedRoute, private questionService: QuestionService, private router: Router, private sharedService: SharedService ) { this.errorFlag = false; }

  CreateQuestion() {
    console.log(this.question.title);
    console.log(this.question.detail);
    if (this.question.title.length < 1) {
      this.errorFlag = true;
    } else {
      return this.questionService.createQuestion(this.uid, this.question)
        .subscribe((res: any) => {
          console.log('res');
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

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.uid = this.sharedService.user._id;
      this.questionService.findQuestionsByUser(this.uid).subscribe((questions: any) => {
        if (questions) {
          this.questions = questions;
        }
      });
      console.log('user id: ' + this.uid);
    });
  }

}
