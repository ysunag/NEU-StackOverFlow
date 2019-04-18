import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnswerEditComponent} from './view/answers/answer-edit/answer-edit.component';
import {AnswerListComponent} from './view/answers/answer-list/answer-list.component';
import {QuestionEditComponent} from './view/questions/question-edit/question-edit.component';
import {QuestionListComponent} from './view/questions/question-list/question-list.component';
import {QuestionAnsweredComponent} from './view/questions/question-answered/question-answered.component';
import {QuestionNewComponent} from './view/questions/question-new/question-new.component';

import {LoginComponent} from './view/user/login/login.component';
import {RegisterComponent} from './view/user/register/register.component';
import {ProfileComponent} from './view/user/profile/profile.component';
import {FlickrImageSearchComponent} from './view/user/profile/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './services/auth-guard.service';
import {HomepageComponent} from './view/pages/homepage/homepage.component';
import {RegisterAdminComponent} from './view/user/register-admin/register-admin.component';
import {MainPageComponent} from './view/pages/main-page/main-page.component';
import {AdminPageComponent} from './view/pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '',  component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerAdmin', component: RegisterAdminComponent},
  {path: 'main', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]},
  { path: 'question/:qid/answer/:aid', component: AnswerEditComponent, canActivate: [AuthGuard]},
  { path: 'question/:qid/answer', component: AnswerListComponent, canActivate: [AuthGuard]},
  { path: 'question/:qid', component: QuestionEditComponent, canActivate: [AuthGuard]},
  { path: 'question', component: QuestionListComponent, canActivate: [AuthGuard]},
  { path: 'question/new', component: QuestionNewComponent, canActivate: [AuthGuard]},
  { path: 'questionAnswered', component: QuestionAnsweredComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
