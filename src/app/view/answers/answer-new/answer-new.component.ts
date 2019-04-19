import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {Answer} from '../../../model/answer.model.client';
import {AnswerService} from '../../../services/answer.service.client';
import {QuestionService} from '../../../services/question.service.client';
import {Author} from '../../../model/author.model.client';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {
  qid: String;
  answer: Answer;

  errorFlag: boolean;
  errorMsg = 'Invalid answer!';


  constructor(private activateRouter: ActivatedRoute, private answerService: AnswerService, private router: Router,
              private sharedService: SharedService, private questionService: QuestionService) {
    this.errorFlag = false;
    this.answer = new Answer('', '', '', {}, '');
  }

  CreateAnswer() {
    console.log(this.answer.detail);
    if (this.answer.detail.length < 1) {
      this.errorFlag = true;
    } else {
      return this.answerService.createAnswer(this.qid, this.answer)
        .subscribe((res: any) => {
          console.log('res');
          this.router.navigate(['/question', this.qid, 'answer']);
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
      this.qid = params['qid'];
      this.questionService.findQuestionById(params['qid']).subscribe((question: any) => {
        if (question) {
          this.answer.questionTitle = question.title;
          this.answer.questionId = question._id;
        }
      });
      this.answer.author = new Author(this.sharedService.user.username, this.sharedService.user._id, this.sharedService.user.email,
        this.sharedService.user.url);
    });
  }

}
