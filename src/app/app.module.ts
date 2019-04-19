import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './view/questions/question-list/question-list.component';
import { QuestionEditComponent } from './view/questions/question-edit/question-edit.component';
import { AnswerEditComponent } from './view/answers/answer-edit/answer-edit.component';
import { AnswerListComponent } from './view/answers/answer-list/answer-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AnswerService} from './services/answer.service.client';
import {SharedService} from './services/shared.service.client';
import {UserService} from './services/user.service.client';
import {FlickrService} from './services/flickr.service.client';
import {AuthGuard} from './services/auth-guard.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { QuestionAnsweredComponent } from './view/questions/question-answered/question-answered.component';
import { QuestionNewComponent } from './view/questions/question-new/question-new.component';

import { LoginComponent } from './view/user/login/login.component';
import { RegisterComponent } from './view/user/register/register.component';
import { ProfileComponent } from './view/user/profile/profile.component';
import {FlickrImageSearchComponent} from './view/user/profile/flickr-image-search/flickr-image-search.component';

import { HomepageComponent } from './view/pages/homepage/homepage.component';
import { RegisterAdminComponent } from './view/user/register-admin/register-admin.component';
import { MainPageComponent } from './view/pages/main-page/main-page.component';
import { AdminPageComponent } from './view/pages/admin-page/admin-page.component';
import {QuestionService} from './services/question.service.client';
import { MyFollowComponent } from './view/user/my-follow/my-follow.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionEditComponent,
    AnswerEditComponent,
    AnswerListComponent,
    QuestionAnsweredComponent,
    QuestionNewComponent,
    HomepageComponent,
    RegisterAdminComponent,
    MainPageComponent,
    AdminPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FlickrImageSearchComponent,
    MyFollowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AnswerService, SharedService, FlickrService, UserService, AuthGuard, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

