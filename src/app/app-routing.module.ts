import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnswerEditComponent} from './view/answers/answer-edit/answer-edit.component';
import {AnswerListComponent} from './view/answers/answer-list/answer-list.component';
import {QuestionEditComponent} from './view/questions/question-edit/question-edit.component';
import {QuestionListComponent} from './view/questions/question-list/question-list.component';
import {QuestionAnsweredComponent} from './view/questions/question-answered/question-answered.component';
import {QuestionNewComponent} from './view/questions/question-new/question-new.component';

const routes: Routes = [
  { path: '/question/:qid/answer/:aid', component: AnswerEditComponent },
  { path: '/question/:qid/answer', component: AnswerListComponent },
  { path: '/question/:qid', component: QuestionEditComponent },
  { path: '/question', component: QuestionListComponent},
  { path: '/question/new', component: QuestionNewComponent},
  { path: '/questionAnswered', component: QuestionAnsweredComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
