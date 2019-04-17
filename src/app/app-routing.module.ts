import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnswerEditComponent} from './view/answers/answer-edit/answer-edit.component';
import {AnswerListComponent} from './view/answers/answer-list/answer-list.component';

const routes: Routes = [
  { path: '/question/:qid/answer/:aid', component: AnswerEditComponent },
  { path: '/question/:qid/answer', component: AnswerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
