import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../../model/answer.model.client';
import {AnswerService} from '../../../services/answer.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {Author} from '../../../model/author.model.client';

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  uid: String;
  aid: String;
  qid: String;
  answer: Answer;

  errorFlag: boolean;
  errorMsg = 'Invalid answer!';


  constructor(private activeRouter: ActivatedRoute, private answerService: AnswerService, private router: Router, private sharedService: SharedService) {
    this.answer = new Answer('', '', '', new Author('', '', '', ''), '');
  }

  UpdateAnswer() {
    console.log(this.answer.detail);
    console.log(this.answer.questionId);
    if (this.answer.detail.length < 1 ) {
      this.errorFlag = true;
    } else {
      this.activeRouter.params.subscribe(params => {
        return this.answerService.updateAnswer(this.answer._id, this.answer)
          .subscribe((pages: any) => {
              this.router.navigate(['question', this.qid, 'answer']);
            },
            (error) => {
              if (error) {
                this.errorMsg = error;
                console.log(error);
                this.errorFlag = true;
              }
            });
      });
    }
  }

  DeleteAnswer() {
    console.log(this.answer.detail);
    console.log(this.answer.questionId);
    this.answerService.deleteAnswer(this.answer._id);
    this.activeRouter.params.subscribe(params => {
      return this.answerService.deleteAnswer(this.answer._id)
        .subscribe((pages: any) => {});
    });
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = this.sharedService.user._id;
      this.qid = params['qid'];
      this.aid = params['aid'];
      console.log(this.aid);
      this.answerService.findAnswerById(params['aid']).subscribe((answer: any) => {
        if (answer) {
          this.answer = answer;
        }
      });
      console.log('user id: ' + this.uid);
      console.log('answer: ' + this.answer);
      console.log('question id: ' + this.qid);
    });
  }


}
