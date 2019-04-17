import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionLsitComponent } from './view/questions/question-lsit/question-lsit.component';
import { QuestionEditComponent } from './view/questions/question-edit/question-edit.component';
import { AnswerEditComponent } from './view/answers/answer-edit/answer-edit.component';
import { AnswerListComponent } from './view/answers/answer-list/answer-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AnswerService} from './services/answer.service.client';
import {SharedService} from './services/shared.service.client';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    QuestionLsitComponent,
    QuestionEditComponent,
    AnswerEditComponent,
    AnswerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AnswerService, SharedService,
  // UserService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
