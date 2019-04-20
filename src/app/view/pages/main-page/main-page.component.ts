import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {User} from '../../../model/user.model.client';
import {Question} from '../../../model/question.model.client';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../services/question.service.client';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user: User;
  questions: Array<Question>;

  constructor(private router: ActivatedRoute, private questionService: QuestionService, private sharedService: SharedService) {
    this.questions = new Array<Question>();
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.user = this.sharedService.user;
      this.questionService.findAllQuestions().subscribe((questions: any) => {
        if (questions) {
          this.questions = questions;
        }
      });
      console.log('user id: ' + this.sharedService.user._id);
    });
  }

  checkAuthor(authorId) {
    return this.user._id === authorId;
  }

}
