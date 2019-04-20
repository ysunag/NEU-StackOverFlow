import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {AnswerService} from '../../../services/answer.service.client';
import {Answer} from '../../../model/answer.model.client';

@Component({
  selector: 'app-question-answered',
  templateUrl: './question-answered.component.html',
  styleUrls: ['./question-answered.component.css']
})
export class QuestionAnsweredComponent implements OnInit {
  answers: Array<Answer>;

  constructor(private router: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService,
              private sharedService: SharedService) {

    this.answers = new Array<Answer>();
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const items = new Set();
      this.answerService.findAnswersByUser(this.sharedService.user._id).subscribe((answers: Array<Answer>) => {
        answers.forEach((item) => {
          if (!items.has(item.questionId)) {
            this.answers.push(item);
            items.add(item.questionId);
            console.log(item);
          }
        }) ;
        console.log('user id: ' + this.sharedService.user._id);
      });
    });
  }
}
