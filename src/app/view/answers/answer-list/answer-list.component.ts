import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question.model.client';
import {Answer} from '../../../model/answer.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {AnswerService} from '../../../services/answer.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {QuestionService} from '../../../services/question.service.client';
import {User} from '../../../model/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  qid: String;
  user: User;
  question: any;
  answers: Array<any>;
  constructor(private activeRouter: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService,
              private router: Router, private sharedService: SharedService, private userService: UserService) {
    this.question = {};
    this.user = new User('', '', '', '', [], []);
    this.answers = new Array<any>();
  }

  checkAuthor(author) {
    return this.user._id === author._id;
  }

  follow(user) {
    this.user.subscribe.push(user);
    console.log('start follow ' + user._id);
    this.userService.followuser(this.user._id, user._id).subscribe((res) => console.log(res));
   // this.userService.updateUser(this.user, user._id).subscribe((res) => console.log(res));
    this.sharedService.user = this.user;
  }

  unFollow(userId) {
    const following = this.user.subscribe;
    for ( let i = 0; i < following.length; i++) {
      if ( following[i]._id === userId) {
        following.splice(i, 1);
      }
    }
    this.user.subscribe = following;
    // this.userService.updateUser(this.user, userId);
    this.userService.unfollow(this.user._id, userId).subscribe((res) => console.log(res));;
    this.sharedService.user = this.user;
  }

  checkNotFollowed(userId) {
    const following = this.user.subscribe;
    if (userId === this.user._id) {
      return false;
    }
    for (let i = 0; i < following.length; i++) {
      if (following[i]._id === userId) {
        return false;
      }
    }
    return true;
  }

  checkFollowed(userId) {
    const following = this.user.subscribe;
    for (let i = 0; i < following.length; i++) {
      if (following[i]._id === userId) {
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activeRouter.params.subscribe(params => {
      this.qid = params['qid'];
      // this.answerService.findAnswerByQuestionId(params['qid']).subscribe((answers: any) => {
      //   if (answers) {
      //     this.answers = answers;
      //     console.log( 'answers:' + answers);
      //   }
      // });
      this.questionService.findQuestionById(params['qid']).subscribe((question: any) => {
        if (question) {
          this.question = question;
          this.answers = this.question.answers;
        }
      })
      console.log('question id: ' + this.qid);
    });
  }

}
