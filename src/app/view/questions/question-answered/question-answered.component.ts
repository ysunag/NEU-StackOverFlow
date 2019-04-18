import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question.model.client';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-question-answered',
  templateUrl: './question-answered.component.html',
  styleUrls: ['./question-answered.component.css']
})
export class QuestionAnsweredComponent implements OnInit {

  questions: Array<Question>;

  constructor(private router: ActivatedRoute, private questionService: QuestionService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.questionService.findAnsweredQuestionsByUser(this.sharedService.user._id).subscribe((questions: any) => {
        if (questions) {
          this.questions = questions;
        }
      });
      console.log('user id: ' + this.sharedService.user._id);
    });
  }
}
