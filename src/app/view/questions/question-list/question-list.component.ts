import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question.model.client';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Array<Question>;

  constructor(private router: ActivatedRoute, private questionService: QuestionService, private sharedService: SharedService) {
    this.questions = new Array<Question>();
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.questionService.findQuestionsByUser(this.sharedService.user._id).subscribe((questions: any) => {
        if (questions) {
          this.questions = questions;
        }
      });
      console.log('user id: ' + this.sharedService.user._id);
    });
  }

  checkIfStudent() {
    return this.sharedService.user.flag === 'Student';
  }
}
