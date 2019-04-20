(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_answers_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/answers/answer-edit/answer-edit.component */ "./src/app/view/answers/answer-edit/answer-edit.component.ts");
/* harmony import */ var _view_answers_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/answers/answer-list/answer-list.component */ "./src/app/view/answers/answer-list/answer-list.component.ts");
/* harmony import */ var _view_questions_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/questions/question-edit/question-edit.component */ "./src/app/view/questions/question-edit/question-edit.component.ts");
/* harmony import */ var _view_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/questions/question-list/question-list.component */ "./src/app/view/questions/question-list/question-list.component.ts");
/* harmony import */ var _view_questions_question_answered_question_answered_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/questions/question-answered/question-answered.component */ "./src/app/view/questions/question-answered/question-answered.component.ts");
/* harmony import */ var _view_questions_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/questions/question-new/question-new.component */ "./src/app/view/questions/question-new/question-new.component.ts");
/* harmony import */ var _view_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/user/login/login.component */ "./src/app/view/user/login/login.component.ts");
/* harmony import */ var _view_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/user/register/register.component */ "./src/app/view/user/register/register.component.ts");
/* harmony import */ var _view_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/user/profile/profile.component */ "./src/app/view/user/profile/profile.component.ts");
/* harmony import */ var _view_user_profile_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/user/profile/flickr-image-search/flickr-image-search.component */ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _view_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/pages/homepage/homepage.component */ "./src/app/view/pages/homepage/homepage.component.ts");
/* harmony import */ var _view_user_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/user/register-admin/register-admin.component */ "./src/app/view/user/register-admin/register-admin.component.ts");
/* harmony import */ var _view_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/pages/main-page/main-page.component */ "./src/app/view/pages/main-page/main-page.component.ts");
/* harmony import */ var _view_pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view/pages/admin-page/admin-page.component */ "./src/app/view/pages/admin-page/admin-page.component.ts");
/* harmony import */ var _view_user_my_follow_my_follow_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view/user/my-follow/my-follow.component */ "./src/app/view/user/my-follow/my-follow.component.ts");
/* harmony import */ var _view_answers_answer_new_answer_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/answers/answer-new/answer-new.component */ "./src/app/view/answers/answer-new/answer-new.component.ts");




















var routes = [
    { path: '', component: _view_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"] },
    { path: 'login', component: _view_user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _view_user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'registerAdmin', component: _view_user_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_15__["RegisterAdminComponent"] },
    { path: 'main', component: _view_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_16__["MainPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'admin', component: _view_pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_17__["AdminPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'profile', component: _view_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'profile/flickr', component: _view_user_profile_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_12__["FlickrImageSearchComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'user/follow', component: _view_user_my_follow_my_follow_component__WEBPACK_IMPORTED_MODULE_18__["MyFollowComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question/:qid/answer/new', component: _view_answers_answer_new_answer_new_component__WEBPACK_IMPORTED_MODULE_19__["AnswerNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question/:qid/answer/:aid', component: _view_answers_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_3__["AnswerEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question/:qid/answer', component: _view_answers_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_4__["AnswerListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question', component: _view_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_6__["QuestionListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question/new', component: _view_questions_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_8__["QuestionNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'question/:qid', component: _view_questions_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_5__["QuestionEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'questionAnswered', component: _view_questions_question_answered_question_answered_component__WEBPACK_IMPORTED_MODULE_7__["QuestionAnsweredComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'neu-stackoverflow';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/questions/question-list/question-list.component */ "./src/app/view/questions/question-list/question-list.component.ts");
/* harmony import */ var _view_questions_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/questions/question-edit/question-edit.component */ "./src/app/view/questions/question-edit/question-edit.component.ts");
/* harmony import */ var _view_answers_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/answers/answer-edit/answer-edit.component */ "./src/app/view/answers/answer-edit/answer-edit.component.ts");
/* harmony import */ var _view_answers_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/answers/answer-list/answer-list.component */ "./src/app/view/answers/answer-list/answer-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_answer_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/answer.service.client */ "./src/app/services/answer.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _view_questions_question_answered_question_answered_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/questions/question-answered/question-answered.component */ "./src/app/view/questions/question-answered/question-answered.component.ts");
/* harmony import */ var _view_questions_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view/questions/question-new/question-new.component */ "./src/app/view/questions/question-new/question-new.component.ts");
/* harmony import */ var _view_user_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view/user/login/login.component */ "./src/app/view/user/login/login.component.ts");
/* harmony import */ var _view_user_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/user/register/register.component */ "./src/app/view/user/register/register.component.ts");
/* harmony import */ var _view_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view/user/profile/profile.component */ "./src/app/view/user/profile/profile.component.ts");
/* harmony import */ var _view_user_profile_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/user/profile/flickr-image-search/flickr-image-search.component */ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _view_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view/pages/homepage/homepage.component */ "./src/app/view/pages/homepage/homepage.component.ts");
/* harmony import */ var _view_user_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view/user/register-admin/register-admin.component */ "./src/app/view/user/register-admin/register-admin.component.ts");
/* harmony import */ var _view_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view/pages/main-page/main-page.component */ "./src/app/view/pages/main-page/main-page.component.ts");
/* harmony import */ var _view_pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view/pages/admin-page/admin-page.component */ "./src/app/view/pages/admin-page/admin-page.component.ts");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _view_user_my_follow_my_follow_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./view/user/my-follow/my-follow.component */ "./src/app/view/user/my-follow/my-follow.component.ts");
/* harmony import */ var _view_answers_answer_new_answer_new_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view/answers/answer-new/answer-new.component */ "./src/app/view/answers/answer-new/answer-new.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _view_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__["QuestionListComponent"],
                _view_questions_question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_6__["QuestionEditComponent"],
                _view_answers_answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_7__["AnswerEditComponent"],
                _view_answers_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_8__["AnswerListComponent"],
                _view_questions_question_answered_question_answered_component__WEBPACK_IMPORTED_MODULE_16__["QuestionAnsweredComponent"],
                _view_questions_question_new_question_new_component__WEBPACK_IMPORTED_MODULE_17__["QuestionNewComponent"],
                _view_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"],
                _view_user_register_admin_register_admin_component__WEBPACK_IMPORTED_MODULE_23__["RegisterAdminComponent"],
                _view_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_24__["MainPageComponent"],
                _view_pages_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_25__["AdminPageComponent"],
                _view_user_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _view_user_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _view_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _view_user_profile_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_21__["FlickrImageSearchComponent"],
                _view_user_my_follow_my_follow_component__WEBPACK_IMPORTED_MODULE_27__["MyFollowComponent"],
                _view_answers_answer_new_answer_new_component__WEBPACK_IMPORTED_MODULE_28__["AnswerNewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ],
            providers: [_services_answer_service_client__WEBPACK_IMPORTED_MODULE_11__["AnswerService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_14__["FlickrService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_26__["QuestionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/answer.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/model/answer.model.client.ts ***!
  \**********************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(_id, detail, questionId, author, questionTitle) {
        this._id = _id;
        this.author = author;
        this.detail = detail;
        this.questionId = questionId;
        this.questionTitle = questionTitle;
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/model/author.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/model/author.model.client.ts ***!
  \**********************************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author(username, _id, email, url) {
        this.username = username;
        this._id = _id;
        this.email = email;
        this.url = url;
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/model/question.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/model/question.model.client.ts ***!
  \************************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(_id, detail, title, questionId, uid) {
        this._id = _id;
        this.userId = uid;
        this.detail = detail;
        this.title = title;
        this.questionId = questionId;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/model/user.model.client.ts":
/*!********************************************!*\
  !*** ./src/app/model/user.model.client.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, subscribe, questions) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.subscribe = subscribe;
        this.questions = questions;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/answer.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/answer.service.client.ts ***!
  \***************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
        this.api = { 'createAnswer': this.createAnswer,
            'findAnswerByQuestionId': this.findAnswerByQuestionId,
            'findAnswersByUser': this.findAnswersByUser,
            'findAnswerById': this.findAnswerById,
            'updateAnswer': this.updateAnswer,
            'deleteAnswer': this.deleteAnswer,
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    AnswerService.prototype.createAnswer = function (questionId, answer) {
        var newAnswer = { detail: answer.detail, questionId: questionId, questionTitle: answer.questionTitle,
            author: { username: answer.author.username, _id: answer.author._id, email: answer.author.email, url: answer.author.url } };
        return this.http.post(this.baseUrl + '/api/question/' + questionId + '/answer', newAnswer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService.prototype.findAnswerByQuestionId = function (questionId) {
        return this.http.get(this.baseUrl + '/api/question/' + questionId + '/answer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService.prototype.findAnswersByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/answerForUser/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService.prototype.findAnswerById = function (answerId) {
        return this.http.get(this.baseUrl + '/api/answer/' + answerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService.prototype.updateAnswer = function (answerId, answer) {
        return this.http.put(this.baseUrl + '/api/answer/' + answerId, answer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService.prototype.deleteAnswer = function (answerId) {
        return this.http.delete(this.baseUrl + '/api/answer/' + answerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '7fba5128545496763fd3c4be85cac0a0';
        this.secret = '2d453d91fea8131a';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT'
            + '&format=json&nojsoncallback=1';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/question.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/question.service.client.ts ***!
  \*****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.api = { 'createQuestion': this.createQuestion,
            'findQuestionsByUser': this.findQuestionsByUser,
            'findAnsweredQuestionsByUser': this.findAnsweredQuestionsByUser,
            'findQuestionById': this.findQuestionById,
            'updateQuestion': this.updateQuestion,
            'deleteQuestion': this.deleteQuestion,
            'findAllQuestions': this.findAllQuestions
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    QuestionService.prototype.createQuestion = function (userId, question) {
        var newQuestion = { title: question.title, detail: question.detail, userId: userId };
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/question', newQuestion).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService.prototype.findAllQuestions = function () {
        return this.http.get(this.baseUrl + '/api/allQuestion/');
    };
    QuestionService.prototype.findQuestionsByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/question').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService.prototype.findAnsweredQuestionsByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/answeredQuestion').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService.prototype.findQuestionById = function (questionId) {
        return this.http.get(this.baseUrl + '/api/question/' + questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService.prototype.updateQuestion = function (questionId, question) {
        return this.http.put(this.baseUrl + '/api/question/' + questionId, question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService.prototype.deleteQuestion = function (questionId) {
        return this.http.delete(this.baseUrl + '/api/question/' + questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.options = { withCredentials: true };
    }
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        return this.http.post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user !== 0) {
                _this.sharedService.user = user; // setting user as global variable using shared service
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService.prototype.register = function (username, password, email, flag) {
        var body = {
            username: username,
            password: password,
            email: email,
            flag: flag
        };
        return this.http.post(this.baseUrl + '/api/register', body, this.options);
    };
    UserService.prototype.updateUser = function (user, userId) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.followuser = function (userId, followId) {
        console.log('client service follow user!');
        var body = {
            followId: followId
        };
        console.log(this.baseUrl + '/api/user/' + userId + '/follow');
        return this.http.put(this.baseUrl + '/api/user/' + userId + '/follow', body);
    };
    UserService.prototype.unfollow = function (userId, unFollowId) {
        var body = {
            unFollowId: unFollowId
        };
        return this.http.put(this.baseUrl + '/api/user/' + userId + '/unfollow', body);
    };
    UserService.prototype.alluser = function () {
        return this.http.get(this.baseUrl + '/api/user/' + '/alluser');
    };
    UserService.prototype.findFollowusers = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/followlist');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/view/answers/answer-edit/answer-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/view/answers/answer-edit/answer-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYW5zd2Vycy9hbnN3ZXItZWRpdC9hbnN3ZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/answers/answer-edit/answer-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/view/answers/answer-edit/answer-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/question/{{qid}}/answer\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n         Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateAnswer()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container cl-container-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"answer-description\">\n        <h5>Your Answer</h5>\n      </label>\n      <textarea [(ngModel)]=\"answer.detail\" name=\"answer-description\" id=\"answer-description\" class=\"form-control\" rows=\"5\"\n                placeholder=\"In my opinion....\"  required #answerContent=\"ngModel\"></textarea>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!answerContent.valid && answerContent.touched\">\n          Please enter your answer!\n    </span>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteAnswer()\" routerLink=\"/question/{{qid}}/answer\">Delete</a>\n    </form>\n\n</div>\n\n<!--<nav class=\"navbar fixed-bottom cl-grey-navbar\">-->\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/answers/answer-edit/answer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/answers/answer-edit/answer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnswerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerEditComponent", function() { return AnswerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_answer_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/answer.model.client */ "./src/app/model/answer.model.client.ts");
/* harmony import */ var _services_answer_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/answer.service.client */ "./src/app/services/answer.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _model_author_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/author.model.client */ "./src/app/model/author.model.client.ts");







var AnswerEditComponent = /** @class */ (function () {
    function AnswerEditComponent(activeRouter, answerService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.answerService = answerService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid answer!';
        this.answer = new _model_answer_model_client__WEBPACK_IMPORTED_MODULE_3__["Answer"]('', '', '', new _model_author_model_client__WEBPACK_IMPORTED_MODULE_6__["Author"]('', '', '', ''), '');
    }
    AnswerEditComponent.prototype.UpdateAnswer = function () {
        var _this = this;
        console.log(this.answer.detail);
        console.log(this.answer.questionId);
        if (this.answer.detail.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.answerService.updateAnswer(_this.answer._id, _this.answer)
                    .subscribe(function (pages) {
                    _this.router.navigate(['question', _this.qid, 'answer']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    AnswerEditComponent.prototype.DeleteAnswer = function () {
        var _this = this;
        console.log(this.answer.detail);
        console.log(this.answer.questionId);
        this.activeRouter.params.subscribe(function (params) {
            return _this.answerService.deleteAnswer(_this.answer._id)
                .subscribe(function (pages) { });
        });
    };
    AnswerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.qid = params['qid'];
            _this.aid = params['aid'];
            console.log(_this.aid);
            _this.answerService.findAnswerById(params['aid']).subscribe(function (answer) {
                if (answer) {
                    _this.answer = answer;
                }
            });
            console.log('user id: ' + _this.uid);
            console.log('answer: ' + _this.answer);
            console.log('question id: ' + _this.qid);
        });
    };
    AnswerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answer-edit',
            template: __webpack_require__(/*! ./answer-edit.component.html */ "./src/app/view/answers/answer-edit/answer-edit.component.html"),
            styles: [__webpack_require__(/*! ./answer-edit.component.css */ "./src/app/view/answers/answer-edit/answer-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_answer_service_client__WEBPACK_IMPORTED_MODULE_4__["AnswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], AnswerEditComponent);
    return AnswerEditComponent;
}());



/***/ }),

/***/ "./src/app/view/answers/answer-list/answer-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/view/answers/answer-list/answer-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYW5zd2Vycy9hbnN3ZXItbGlzdC9hbnN3ZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/answers/answer-list/answer-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/view/answers/answer-list/answer-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/main\" class=\"navbar-brand cl-icon-padding cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"\">\n        answers\n      </a>\n    </div>\n    <a *ngIf=\"user.flag !== 'Guest'\" routerLink='/question/{{qid}}/answer/new' class=\"navbar-brand cl-text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div class=\"cl-question-padding\">\n    <div class=\"card cl-full-width\">\n      <div class=\"card-header cl-text-bold\">\n        Question\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{question.title}}</h4>\n        <!--<h6 class=\"card-subtitle mb-2 text-muted\">Emilia-Romagna Region, Italy</h6>-->\n        <p class=\"card-text\">{{question.detail}}</p>\n      </div>\n    </div>\n  </div>\n  <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n    <li *ngFor=\"let item of answers\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n\n      <div class=\"card cl-full-width\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{item.detail}}</p>\n          <a *ngIf=\"checkAuthor(item.author)\" routerLink=\"/question/{{qid}}/answer/{{item._id}}\" class=\"cl-text-black float-right\"><span class=\"fas fa-edit\"></span></a>\n        </div>\n        <div class=\"card-footer text-right\">\n          {{item.author.username}}\n          <i class=\"fas fa-user-plus\" *ngIf=\"checkNotFollowed(item.author._id)\" (click)=\"follow(item.author)\"></i>\n          <i class=\"fas fa-user-slash\" *ngIf=\"checkFollowed(item.author._id)\" (click)=\"unFollow(item.author._id)\"></i>\n        </div>\n      </div>\n\n\n      <!--<div [innerHTML]=\"item.detail\"></div>-->\n      <!--<div class=\"row\">-->\n              <!--<span>-->\n                <!--{{item.author.username}}-->\n              <!--</span>-->\n            <!--&lt;!&ndash;<span *ngIf=\"checkNotFollowed(item.author)\" (click)=\"follow(item.author)\">&ndash;&gt;-->\n                <!--<span class=\"btn btn-success  btn-block\" *ngIf=\"checkNotFollowed(item.author._id)\" (click)=\"follow(item.author)\">Follow</span>-->\n            <!--<span class=\"btn btn-danger  btn-block\" *ngIf=\"checkFollowed(item.author._id)\" (click)=\"unFollow(item.author._id)\">Unfollow</span>-->\n          <!--</div>-->\n          <!--<a  *ngIf=\"checkAuthor(item.author)\" routerLink=\"/question/{{qid}}/answer/{{item._id}}\" class=\"cl-text-black\"><span class=\"fas fa-edit\"></span></a>-->\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/answers/answer-list/answer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/answers/answer-list/answer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function() { return AnswerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_answer_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/answer.service.client */ "./src/app/services/answer.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/user.model.client */ "./src/app/model/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");








var AnswerListComponent = /** @class */ (function () {
    function AnswerListComponent(activeRouter, questionService, answerService, router, sharedService, userService) {
        this.activeRouter = activeRouter;
        this.questionService = questionService;
        this.answerService = answerService;
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
        this.question = {};
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_6__["User"]('', '', '', '', [], []);
        this.answers = new Array();
    }
    AnswerListComponent.prototype.checkAuthor = function (author) {
        return this.user._id === author._id;
    };
    AnswerListComponent.prototype.follow = function (user) {
        this.user.subscribe.push(user);
        console.log('start follow ' + user._id);
        this.userService.followuser(this.user._id, user._id).subscribe(function (res) { return console.log(res); });
        // this.userService.updateUser(this.user, user._id).subscribe((res) => console.log(res));
        this.sharedService.user = this.user;
    };
    AnswerListComponent.prototype.unFollow = function (userId) {
        var following = this.user.subscribe;
        for (var i = 0; i < following.length; i++) {
            if (following[i]._id === userId) {
                following.splice(i, 1);
            }
        }
        this.user.subscribe = following;
        // this.userService.updateUser(this.user, userId);
        this.userService.unfollow(this.user._id, userId).subscribe(function (res) { return console.log(res); });
        ;
        this.sharedService.user = this.user;
    };
    AnswerListComponent.prototype.checkNotFollowed = function (userId) {
        var following = this.user.subscribe;
        if (userId === this.user._id) {
            return false;
        }
        for (var i = 0; i < following.length; i++) {
            if (following[i]._id === userId) {
                return false;
            }
        }
        return true;
    };
    AnswerListComponent.prototype.checkFollowed = function (userId) {
        var following = this.user.subscribe;
        for (var i = 0; i < following.length; i++) {
            if (following[i]._id === userId) {
                return true;
            }
        }
        return false;
    };
    AnswerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activeRouter.params.subscribe(function (params) {
            _this.qid = params['qid'];
            // this.answerService.findAnswerByQuestionId(params['qid']).subscribe((answers: any) => {
            //   if (answers) {
            //     this.answers = answers;
            //     console.log( 'answers:' + answers);
            //   }
            // });
            _this.questionService.findQuestionById(params['qid']).subscribe(function (question) {
                if (question) {
                    _this.question = question;
                    _this.answers = _this.question.answers;
                }
            });
            console.log('question id: ' + _this.qid);
        });
    };
    AnswerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answer-list',
            template: __webpack_require__(/*! ./answer-list.component.html */ "./src/app/view/answers/answer-list/answer-list.component.html"),
            styles: [__webpack_require__(/*! ./answer-list.component.css */ "./src/app/view/answers/answer-list/answer-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_5__["QuestionService"], _services_answer_service_client__WEBPACK_IMPORTED_MODULE_3__["AnswerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], AnswerListComponent);
    return AnswerListComponent;
}());



/***/ }),

/***/ "./src/app/view/answers/answer-new/answer-new.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/answers/answer-new/answer-new.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYW5zd2Vycy9hbnN3ZXItbmV3L2Fuc3dlci1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/answers/answer-new/answer-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view/answers/answer-new/answer-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/question/{{qid}}/answer\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        New Answer\n      </a>\n    </div>\n    <span (click)=\"CreateAnswer()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container cl-container-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"answer-description\">\n        <h5>Your Answer</h5>\n      </label>\n      <textarea [(ngModel)]=\"answer.detail\" name=\"answer-description\" id=\"answer-description\" class=\"form-control\" rows=\"5\"\n                placeholder=\"In my opinion....\"  required #answerContent=\"ngModel\"></textarea>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!answerContent.valid && answerContent.touched\">\n          Please enter your answer!\n    </span>\n  </form>\n\n</div>\n\n<!--<nav class=\"navbar fixed-bottom cl-grey-navbar\">-->\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-black\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/answers/answer-new/answer-new.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/answers/answer-new/answer-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: AnswerNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerNewComponent", function() { return AnswerNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _model_answer_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/answer.model.client */ "./src/app/model/answer.model.client.ts");
/* harmony import */ var _services_answer_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/answer.service.client */ "./src/app/services/answer.service.client.ts");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _model_author_model_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/author.model.client */ "./src/app/model/author.model.client.ts");








var AnswerNewComponent = /** @class */ (function () {
    function AnswerNewComponent(activateRouter, answerService, router, sharedService, questionService) {
        this.activateRouter = activateRouter;
        this.answerService = answerService;
        this.router = router;
        this.sharedService = sharedService;
        this.questionService = questionService;
        this.errorMsg = 'Invalid answer!';
        this.errorFlag = false;
        this.answer = new _model_answer_model_client__WEBPACK_IMPORTED_MODULE_4__["Answer"]('', '', '', {}, '');
    }
    AnswerNewComponent.prototype.CreateAnswer = function () {
        var _this = this;
        console.log(this.answer.detail);
        if (this.answer.detail.length < 1) {
            this.errorFlag = true;
        }
        else {
            return this.answerService.createAnswer(this.qid, this.answer)
                .subscribe(function (res) {
                console.log('res');
                _this.router.navigate(['/question', _this.qid, 'answer']);
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    AnswerNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params.subscribe(function (params) {
            _this.qid = params['qid'];
            _this.questionService.findQuestionById(params['qid']).subscribe(function (question) {
                if (question) {
                    _this.answer.questionTitle = question.title;
                    _this.answer.questionId = question._id;
                }
            });
            _this.answer.author = new _model_author_model_client__WEBPACK_IMPORTED_MODULE_7__["Author"](_this.sharedService.user.username, _this.sharedService.user._id, _this.sharedService.user.email, _this.sharedService.user.url);
        });
    };
    AnswerNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answer-new',
            template: __webpack_require__(/*! ./answer-new.component.html */ "./src/app/view/answers/answer-new/answer-new.component.html"),
            styles: [__webpack_require__(/*! ./answer-new.component.css */ "./src/app/view/answers/answer-new/answer-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_answer_service_client__WEBPACK_IMPORTED_MODULE_5__["AnswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]])
    ], AnswerNewComponent);
    return AnswerNewComponent;
}());



/***/ }),

/***/ "./src/app/view/pages/admin-page/admin-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view/pages/admin-page/admin-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcGFnZXMvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/pages/admin-page/admin-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/view/pages/admin-page/admin-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">NeuSOF</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/main\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag !== 'Admin'\">\n        <a class=\"nav-link\" href=\"/user/follow\">My Follow</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"user.flag === 'Student'\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Questions and answers\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">My Question</a>\n          <a class=\"dropdown-item\" href=\"#\">My Answer</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\"><span class=\"fa fa-plus\"></span> Post new Question</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag === 'Teacher'\">\n        <a class=\"nav-link\" href=\"#\">My Answers</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/pages/admin-page/admin-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/pages/admin-page/admin-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");



var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(sharedService) {
        this.sharedService = sharedService;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/view/pages/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/view/pages/admin-page/admin-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/view/pages/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/pages/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #000;\n}\n\n.homepage {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  padding-top: 40vh;\n}\n\n.homepage h1 {\n  color: black;\n}\n\n.backimg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.backimg li {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  -webkit-animation: imageAnimation 30s linear infinite;\n          animation: imageAnimation 30s linear infinite;\n}\n\n.backimg li:nth-child(1) {\n  background-image: url('bg-masthead.jpg')\n}\n\n.backimg li:nth-child(2) {\n  background-image: url('2.jpg');\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n\n.backimg li:nth-child(3) {\n  background-image: url('3.jpg');\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n.backimg li:nth-child(4) {\n  background-image: url('4.jpg');\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n}\n\n.backimg li:nth-child(5) {\n  background-image: url('5.jpg');\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s;\n}\n\n.backimg li:nth-child(6) {\n  background-image: url('6.jpg');\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s;\n}\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n.no-cssanimations .backimg li {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixVQUFVO0VBQ1YscURBQTZDO1VBQTdDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLDhCQUE2QztFQUM3Qyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDhCQUE2QztFQUM3Qyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsVUFBVTtJQUNWLDJDQUFtQztZQUFuQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRjs7QUFmQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC92aWV3L3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmhvbWVwYWdlIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHZoO1xufVxuXG4uaG9tZXBhZ2UgaDEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYWNraW1nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJhY2tpbWcgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbiAgYW5pbWF0aW9uOiBpbWFnZUFuaW1hdGlvbiAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYmFja2ltZyBsaTpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy9iZy1tYXN0aGVhZC5qcGcpXG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy8yLmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogNXM7XG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy8zLmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMTBzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvNC5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDE1cztcbn1cbi5iYWNraW1nIGxpOm50aC1jaGlsZCg1KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWdzLzUuanBnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoNikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy82LmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGltYWdlQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn1cblxuLm5vLWNzc2FuaW1hdGlvbnMgLmJhY2tpbWcgbGkge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/view/pages/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/pages/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"homepage\">\n  <h1>Welcome to NEU-StackOverFlow</h1>\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-primary\">Login</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success\">Register</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/registerAdmin\" class=\"btn btn-warning\">Register Admin</a>\n    </div>\n  </form>\n</div>\n\n<ul class=\"backimg\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/view/pages/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/pages/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/view/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/view/pages/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/view/pages/main-page/main-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view/pages/main-page/main-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/pages/main-page/main-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view/pages/main-page/main-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">NeuSOF</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/main\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag !== 'Admin'\">\n        <a class=\"nav-link\" href=\"/user/follow\">My Follow</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"user.flag === 'Student'\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Questions and answers\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"/question\">My Question</a>\n          <a class=\"dropdown-item\" href=\"/questionAnswered\">My Answer</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"/question/new\"><span class=\"fa fa-plus\"></span> Post new Question</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag === 'Teacher'\">\n        <a class=\"nav-link\" href=\"/questionAnswered\">My Answers</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n    <li *ngFor=\"let item of questions\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/question/{{item._id}}/answer\" class=\"cl-text-black\">{{item.title}}</a>\n      <a *ngIf=\"checkAuthor(item.userId)\" routerLink=\"/question/{{item._id}}\" class=\"cl-text-black\"><span class=\"fas fa-edit\"></span></a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/view/pages/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/pages/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");





var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(router, questionService, sharedService) {
        this.router = router;
        this.questionService = questionService;
        this.sharedService = sharedService;
        this.questions = new Array();
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.questionService.findAllQuestions().subscribe(function (questions) {
                if (questions) {
                    _this.questions = questions;
                }
            });
            console.log('user id: ' + _this.sharedService.user._id);
        });
    };
    MainPageComponent.prototype.checkAuthor = function (authorId) {
        return this.user._id === authorId;
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/view/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/view/pages/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/view/questions/question-answered/question-answered.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/view/questions/question-answered/question-answered.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcXVlc3Rpb25zL3F1ZXN0aW9uLWFuc3dlcmVkL3F1ZXN0aW9uLWFuc3dlcmVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/questions/question-answered/question-answered.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/view/questions/question-answered/question-answered.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/main\" class=\"navbar-brand cl-icon-padding cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"\">\n        My answers\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n    <li *ngFor=\"let item of answers\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/question/{{item.questionId}}/answer\" class=\"cl-text-black\">{{item.questionTitle}}</a>\n    </li>\n  </ul>\n</div>\n\n<!--<nav class=\"navbar fixed-bottom cl-blue-navbar\">-->\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/questions/question-answered/question-answered.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/view/questions/question-answered/question-answered.component.ts ***!
  \*********************************************************************************/
/*! exports provided: QuestionAnsweredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnsweredComponent", function() { return QuestionAnsweredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_answer_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/answer.service.client */ "./src/app/services/answer.service.client.ts");






var QuestionAnsweredComponent = /** @class */ (function () {
    function QuestionAnsweredComponent(router, questionService, answerService, sharedService) {
        this.router = router;
        this.questionService = questionService;
        this.answerService = answerService;
        this.sharedService = sharedService;
        this.answers = new Array();
    }
    QuestionAnsweredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var items = new Set();
            _this.answerService.findAnswersByUser(_this.sharedService.user._id).subscribe(function (answers) {
                answers.forEach(function (item) {
                    if (!items.has(item.questionId)) {
                        _this.answers.push(item);
                        items.add(item.questionId);
                        console.log(item);
                    }
                });
                console.log('user id: ' + _this.sharedService.user._id);
            });
        });
    };
    QuestionAnsweredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-answered',
            template: __webpack_require__(/*! ./question-answered.component.html */ "./src/app/view/questions/question-answered/question-answered.component.html"),
            styles: [__webpack_require__(/*! ./question-answered.component.css */ "./src/app/view/questions/question-answered/question-answered.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _services_answer_service_client__WEBPACK_IMPORTED_MODULE_5__["AnswerService"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], QuestionAnsweredComponent);
    return QuestionAnsweredComponent;
}());



/***/ }),

/***/ "./src/app/view/questions/question-edit/question-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/view/questions/question-edit/question-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcXVlc3Rpb25zL3F1ZXN0aW9uLWVkaXQvcXVlc3Rpb24tZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/questions/question-edit/question-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/view/questions/question-edit/question-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/question\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        My Questions\n      </a>\n      <a routerLink=\"/question/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/profile\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Edit Questions\n      </a>\n      <span (click)=\"UpdateQuestion()\"  class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid cl-container-padding\">\n\n  <div class=\"col-sm-4 d-none d-sm-block\">\n    <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n      <li *ngFor=\"let item of questions\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/question/{{item._id}}/answer\" class=\"cl-text-black\">{{item.title}}</a>\n        <a routerLink=\"/question/{{item._id}}\" class=\"cl-text-black\"><span class=\"fas fa-edit\"></span></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"question-name\">\n          <h5>Question Title</h5>\n        </label>\n        <input [(ngModel)]=\"question.title\" name=\"question-name\" type=\"text\" class=\"form-control\" id=\"question-name\" placeholder=\"Blogger\" required #questionName=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"!questionName.valid && questionName.touched\">\n          Please enter question title!\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question-description\">Question Detail</label>\n        <textarea [(ngModel)]=\"question.detail\" name=\"question-description\" id=\"question-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"I have a question...\"></textarea>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteQuestion()\" routerLink=\"/question\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/questions/question-edit/question-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view/questions/question-edit/question-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuestionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditComponent", function() { return QuestionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_question_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/question.model.client */ "./src/app/model/question.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var QuestionEditComponent = /** @class */ (function () {
    function QuestionEditComponent(activeRouter, questionService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.questionService = questionService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid question title!';
        this.question = new _model_question_model_client__WEBPACK_IMPORTED_MODULE_2__["Question"]('', '', '', '', '');
        this.errorFlag = false;
    }
    QuestionEditComponent.prototype.UpdateQuestion = function () {
        var _this = this;
        console.log(this.question.title);
        console.log(this.question.detail);
        if (this.question.title.length < 1) {
            this.errorFlag = true;
        }
        else {
            return this.questionService.updateQuestion(this.question._id, this.question)
                .subscribe(function (questions) {
                _this.questions = questions;
                _this.router.navigate(['/question']);
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    QuestionEditComponent.prototype.DeleteQuestion = function () {
        var _this = this;
        console.log(this.question.title);
        console.log(this.question.detail);
        this.activeRouter.params.subscribe(function (params) {
            return _this.questionService.deleteQuestion(_this.question._id)
                .subscribe(function (questions) { });
        });
    };
    QuestionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.question._id = params['qid'];
            _this.questionService.findQuestionById(params['qid']).subscribe(function (question) {
                if (question) {
                    _this.question = question;
                }
            });
            _this.questionService.findQuestionsByUser(_this.uid).subscribe(function (questions) {
                if (questions) {
                    _this.questions = questions;
                }
            });
            console.log('user id: ' + _this.uid);
            console.log('question id: ' + _this.question._id);
        });
    };
    QuestionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-edit',
            template: __webpack_require__(/*! ./question-edit.component.html */ "./src/app/view/questions/question-edit/question-edit.component.html"),
            styles: [__webpack_require__(/*! ./question-edit.component.css */ "./src/app/view/questions/question-edit/question-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], QuestionEditComponent);
    return QuestionEditComponent;
}());



/***/ }),

/***/ "./src/app/view/questions/question-list/question-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/view/questions/question-list/question-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcXVlc3Rpb25zL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/questions/question-list/question-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/view/questions/question-list/question-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/main\" class=\"navbar-brand cl-icon-padding cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"\">\n        My Questions\n      </a>\n    </div>\n    <a *ngIf=\"checkIfStudent()\" routerLink='/question/new' class=\"navbar-brand cl-text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n    <li *ngFor=\"let item of questions\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/question/{{item._id}}/answer\" class=\"cl-text-black\">{{item.title}}</a>\n      <a routerLink=\"/question/{{item._id}}\" class=\"cl-text-black\"><span class=\"fas fa-edit\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<!--<nav class=\"navbar fixed-bottom cl-blue-navbar\">-->\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/questions/question-list/question-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view/questions/question-list/question-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");





var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(router, questionService, sharedService) {
        this.router = router;
        this.questionService = questionService;
        this.sharedService = sharedService;
        this.questions = new Array();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.questionService.findQuestionsByUser(_this.sharedService.user._id).subscribe(function (questions) {
                if (questions) {
                    _this.questions = questions;
                }
            });
            console.log('user id: ' + _this.sharedService.user._id);
        });
    };
    QuestionListComponent.prototype.checkIfStudent = function () {
        return this.sharedService.user.flag === 'Student';
    };
    QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/view/questions/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/view/questions/question-list/question-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/view/questions/question-new/question-new.component.css":
/*!************************************************************************!*\
  !*** ./src/app/view/questions/question-new/question-new.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvcXVlc3Rpb25zL3F1ZXN0aW9uLW5ldy9xdWVzdGlvbi1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/questions/question-new/question-new.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/view/questions/question-new/question-new.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar fixed-top cl-blue-navbar\">-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/question\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand\" routerLink=\"#\">\n        New Question\n      </a>\n      <a routerLink=\"/question/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/question\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand\" routerLink=\"#\">\n        New Question\n      </a>\n      <span (click)=\"CreateQuestion()\" class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </span>\n\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"row container-fluid cl-container-padding\">\n  <div class=\"col-sm-4 d-none d-sm-block \">\n    <ul class=\"list-group cl-list-group-borderless cl-text-black\">\n      <li *ngFor=\"let item of questions\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/question/{{item._id}}/answer\" class=\"cl-text-black\">{{item.title}}</a>\n        <a routerLink=\"/question/{{item._id}}\" class=\"cl-text-black\"><span class=\"fas fa-edit\"></span></a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"question-name\">\n          <h5>Title</h5>\n        </label>\n        <input [(ngModel)]=\"question.title\" name=\"question-name\" type=\"text\" class=\"form-control\" id=\"question-name\" placeholder=\"Angular component\" required #questionName=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"!questionName.valid && questionName.touched\">\n          Please enter question title!\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question-description\">\n          <h5>Detail</h5>\n        </label>\n        <textarea [(ngModel)]=\"question.detail\" name=\"question-description\" id=\"question-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!--<nav class=\"navbar fixed-bottom cl-blue-navbar\">-->\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/view/questions/question-new/question-new.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view/questions/question-new/question-new.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionNewComponent", function() { return QuestionNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_question_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/question.model.client */ "./src/app/model/question.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/question.service.client */ "./src/app/services/question.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var QuestionNewComponent = /** @class */ (function () {
    function QuestionNewComponent(activateRouter, questionService, router, sharedService) {
        this.activateRouter = activateRouter;
        this.questionService = questionService;
        this.router = router;
        this.sharedService = sharedService;
        this.question = new _model_question_model_client__WEBPACK_IMPORTED_MODULE_2__["Question"]('', '', '', '', '');
        this.errorMsg = 'Invalid question name!';
        this.errorFlag = false;
        this.questions = new Array();
    }
    QuestionNewComponent.prototype.CreateQuestion = function () {
        var _this = this;
        console.log(this.question.title);
        console.log(this.question.detail);
        if (this.question.title.length < 1) {
            this.errorFlag = true;
        }
        else {
            return this.questionService.createQuestion(this.uid, this.question)
                .subscribe(function (res) {
                console.log('res');
                _this.router.navigate(['/question']);
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    QuestionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.questionService.findQuestionsByUser(_this.uid).subscribe(function (questions) {
                if (questions) {
                    _this.questions = questions;
                    _this.sharedService.user.questions = questions;
                }
            });
            console.log('user id: ' + _this.uid);
        });
    };
    QuestionNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-new',
            template: __webpack_require__(/*! ./question-new.component.html */ "./src/app/view/questions/question-new/question-new.component.html"),
            styles: [__webpack_require__(/*! ./question-new.component.css */ "./src/app/view/questions/question-new/question-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_question_service_client__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], QuestionNewComponent);
    return QuestionNewComponent;
}());



/***/ }),

/***/ "./src/app/view/user/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view/user/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #000;\n}\n\n.homepage {\n  z-index: 1;\n  position: relative;\n  padding-top: 10vh;\n  padding-left: 30%;\n  padding-right: 30%;\n  color: white;\n}\n\n.homepage h1 {\n  color: black;\n}\n\n.backimg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.backimg li {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  -webkit-animation: imageAnimation 30s linear infinite;\n          animation: imageAnimation 30s linear infinite;\n}\n\n.backimg li:nth-child(1) {\n  background-image: url('bg-masthead.jpg')\n}\n\n.backimg li:nth-child(2) {\n  background-image: url('2.jpg');\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n\n.backimg li:nth-child(3) {\n  background-image: url('3.jpg');\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n.backimg li:nth-child(4) {\n  background-image: url('4.jpg');\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n}\n\n.backimg li:nth-child(5) {\n  background-image: url('5.jpg');\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s;\n}\n\n.backimg li:nth-child(6) {\n  background-image: url('6.jpg');\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s;\n}\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n.no-cssanimations .backimg li {\n  opacity: 1;\n}\n\n.inter-button {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsVUFBVTtFQUNWLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDhCQUE2QztFQUM3Qyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBZkE7RUFDRTtJQUNFLFVBQVU7SUFDViwwQ0FBa0M7WUFBbEMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkNBQW1DO1lBQW5DLG1DQUFtQztFQUNyQztFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5ob21lcGFnZSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvbWVwYWdlIGgxIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmFja2ltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iYWNraW1nIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGFuaW1hdGlvbjogaW1hZ2VBbmltYXRpb24gMzBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvYmctbWFzdGhlYWQuanBnKVxufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDVzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMy5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDEwcztcbn1cbi5iYWNraW1nIGxpOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWdzLzQuanBnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy81LmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMjBzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvNi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDI1cztcbn1cblxuQGtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG59XG5cbi5uby1jc3NhbmltYXRpb25zIC5iYWNraW1nIGxpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmludGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view/user/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/view/user/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <div class=\"text-center\">\n    <h1>Login</h1>\n  </div>\n  <form (ngSubmit)=\"login()\" #inputForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" name=\"username\" id='name' placeholder=\"Tom\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input type=\"password\" name=\"password\" id='pass' placeholder=\"Input your password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group inter-button\">\n      <button [disabled]=\"!inputForm.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n\n  <div class=\"form-group inter-button inter-button\">\n  <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\"> <span class=\"fa fa-facebook\"></span> Login as Guest by Facebook </a>\n  </div>\n\n  <div class=\"form-group inter-button\">\n    <a routerLink=\"/\" class=\"btn btn-danger btn-block\">Back to home</a>\n  </div>\n</div>\n\n<ul class=\"backimg\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/view/user/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view/user/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        return this.userService.login(username, password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.errorFlag = false;
            // Student, Teacher, Guest, Admin
            if (user.flag === 'Admin') {
                _this.router.navigate(['/admin']);
            }
            else {
                _this.router.navigate(['/main']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/view/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/view/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/user/my-follow/my-follow.component.css":
/*!*************************************************************!*\
  !*** ./src/app/view/user/my-follow/my-follow.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatarsmall {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL215LWZvbGxvdy9teS1mb2xsb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci9teS1mb2xsb3cvbXktZm9sbG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyc21hbGwge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/user/my-follow/my-follow.component.html":
/*!**************************************************************!*\
  !*** ./src/app/view/user/my-follow/my-follow.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">NeuSOF</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/main\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profile\">Profile</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"user.flag !== 'Admin'\">\n        <a class=\"nav-link\" href=\"/user/follow\">My Follow</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"user.flag === 'Student'\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Questions and answers\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">My Question</a>\n          <a class=\"dropdown-item\" href=\"#\">My Answer</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Post new Question</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag === 'Teacher'\">\n        <a class=\"nav-link\" href=\"#\">My Answers</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\"  *ngFor = \"let user of userList; index as i\">\n      <div class=\"card text-white bg-primary mb-3 mx-auto\" style=\"max-width: 18rem;\" *ngIf=\"i % 5 == 0\">\n        <div class=\"card-header\">\n          <img src=\"{{user.url}}\" alt=\"Avatar\" class=\"avatarsmall\">\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{user.username}}</h5>\n          <p class=\"card-text\">Email: {{user.email}}</p>\n          <button class=\"btn btn-danger btn-block\" (click)=\"unfollow(user._id)\">UnFollow</button>\n        </div>\n      </div>\n\n      <div class=\"card text-white bg-secondary mb-3 mx-auto\" style=\"max-width: 18rem;\" *ngIf=\"i % 5 == 1\">\n        <div class=\"card-header\">\n          <img src=\"{{user.url}}\" alt=\"Avatar\" class=\"avatarsmall\">\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{user.username}}</h5>\n          <p class=\"card-text\">Email: {{user.email}}</p>\n          <button class=\"btn btn-danger btn-block\" (click)=\"unfollow(user._id)\">UnFollow</button>\n        </div>\n      </div>\n\n      <div class=\"card text-white bg-success mb-3 mx-auto\" style=\"max-width: 18rem;\" *ngIf=\"i % 5 == 2\">\n        <div class=\"card-header\">\n          <img src=\"{{user.url}}\" alt=\"Avatar\" class=\"avatarsmall\">\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{user.username}}</h5>\n          <p class=\"card-text\">Email: {{user.email}}</p>\n          <button class=\"btn btn-danger btn-block\" (click)=\"unfollow(user._id)\">UnFollow</button>\n        </div>\n      </div>\n\n      <div class=\"card text-white bg-warning mb-3 mx-auto\" style=\"max-width: 18rem;\" *ngIf=\"i % 5 == 3\">\n        <div class=\"card-header\">\n          <img src=\"{{user.url}}\" alt=\"Avatar\" class=\"avatarsmall\">\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{user.username}}</h5>\n          <p class=\"card-text\">Email: {{user.email}}</p>\n          <button class=\"btn btn-danger btn-block\" (click)=\"unfollow(user._id)\">UnFollow</button>\n        </div>\n      </div>\n\n      <div class=\"card text-white bg-info mb-3 mx-auto\" style=\"max-width: 18rem;\" *ngIf=\"i % 5 == 4\">\n        <div class=\"card-header\">\n          <img src=\"{{user.url}}\" alt=\"Avatar\" class=\"avatarsmall\">\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{user.username}}</h5>\n          <p class=\"card-text\">Email: {{user.email}}</p>\n          <button class=\"btn btn-danger btn-block\" (click)=\"unfollow(user._id)\">UnFollow</button>\n        </div>\n      </div>\n\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/view/user/my-follow/my-follow.component.ts":
/*!************************************************************!*\
  !*** ./src/app/view/user/my-follow/my-follow.component.ts ***!
  \************************************************************/
/*! exports provided: MyFollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFollowComponent", function() { return MyFollowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");






var MyFollowComponent = /** @class */ (function () {
    function MyFollowComponent(userService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.userList = [];
    }
    MyFollowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.findFollowusers(_this.user._id).subscribe(function (userList) {
                _this.userList = userList;
            });
        });
    };
    MyFollowComponent.prototype.unfollow = function (unFollowId) {
        var _this = this;
        this.userService.unfollow(this.user._id, unFollowId).subscribe(function (status) {
            _this.userService.findFollowusers(_this.user._id).subscribe(function (userList) {
                _this.userList = userList;
            });
        });
    };
    MyFollowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-follow',
            template: __webpack_require__(/*! ./my-follow.component.html */ "./src/app/view/user/my-follow/my-follow.component.html"),
            styles: [__webpack_require__(/*! ./my-follow.component.css */ "./src/app/view/user/my-follow/my-follow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], MyFollowComponent);
    return MyFollowComponent;
}());



/***/ }),

/***/ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-top: 10%;\n}\n\n.inter-button {\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-top: 2%;\n}\n\n.centertext {\n  text-align: center;\n  padding-top: 2%;\n}\n\n.pictures {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n}\n\n.single {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL3Byb2ZpbGUvZmxpY2tyLWltYWdlLXNlYXJjaC9mbGlja3ItaW1hZ2Utc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3L3VzZXIvcHJvZmlsZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uaW50ZXItYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4uY2VudGVydGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4ucGljdHVyZXMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4uc2luZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/profile\"><span class=\"fa fa-chevron-left rotate\"></span> Back to profile</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n</nav>\n\n\n<div class = \"container\">\n  <div class=\"centertext\">\n    <h1>Search and select the picture you like...</h1>\n  </div>\n  <div class=\"input-group inter-button\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"fa fa-search\"></span>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row pictures\">\n\n    <div *ngFor = \"let pic of photos\" class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"\n      class=\"single img-thumbnail\"/>\n\n      <p></p>\n    </div>\n  </div>\n\n</div>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, userService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            _this.photos = data.photos.photo;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.user.url = url;
        this.userService.updateUser(this.user, this.user._id).subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/profile']);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/view/user/profile/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/view/user/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view/user/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inter-button {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.subtitle {\n  color: grey;\n}\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlci1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnByb2ZpbGUtdXNlcnRpdGxlLW5hbWUge1xuICBjb2xvcjogIzVhNzM5MTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view/user/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view/user/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">NeuSOF</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/main\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag !== 'Admin'\">\n        <a class=\"nav-link\" href=\"/user/follow\">My Follow</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"user.flag === 'Student'\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Questions and answers\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">My Question</a>\n          <a class=\"dropdown-item\" href=\"#\">My Answer</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Post new Question</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"user.flag === 'Teacher'\">\n        <a class=\"nav-link\" href=\"#\">My Answers</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container main\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"avatar\">\n        <h5>Avatar</h5>\n        <h6 class=\"subtitle\">(Click picture to search and change avatar)</h6>\n      </label>\n      <div>\n        <img src=\"{{user.url}}\" id='avatar' alt=\"Avatar\" class=\"avatar\" routerLink=\"/profile/flickr\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">\n        <h5>Username</h5>\n      </label>\n      <div class=\"profile-usertitle-name\" id='username'>\n        {{user.username}}\n      </div>\n      <!--<input type=\"text\" id='username' name='username' class=\"form-control\" [(ngModel)]=\"user.username\" required>-->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">\n        <h5>Email address</h5>\n      </label>\n      <input type=\"email\" id=\"email\" name='email' class=\"form-control\" [(ngModel)]=\"user.email\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">\n        <h5>First Name</h5>\n      </label>\n      <input type=\"text\" id=\"first-name\" name='firstName' class=\"form-control\" [(ngModel)]=\"user.firstName\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">\n        <h5>Last Name</h5>\n      </label>\n      <input type=\"text\" id=\"last-name\" name='lastName' class=\"form-control\" [(ngModel)]=\"user.lastName\" required>\n    </div>\n\n    <!--<form ngNoForm action=\"{{baseUrl}}api/upload\" method=\"post\" enctype=\"multipart/form-data\">-->\n      <!--<label for=\"myFile\"><h5>Upload Avatar Image</h5></label>-->\n      <!--<input  name=\"myFile\" id=\"myFile\"  type=\"file\" class=\"form-control form-group\"/>-->\n      <!--<input  class=\"form-inline\" name=\"userId\" value=\"{{user._id}}\" style=\"display: none\"/>-->\n      <!--<div class=\"form-group inter-button\">-->\n        <!--<button type=\"submit\" class=\"btn btn-block btn-primary inter-button\">Upload</button>-->\n      <!--</div>-->\n    <!--</form>-->\n\n\n    <div class=\"form-group inter-button\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"updateUser()\">\n        Update Info\n      </button>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <button routerLink=\"/login\" (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\">Delete User</button>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <button class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</button>\n    </div>\n\n\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/view/user/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view/user/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        var newUser = {
            username: this.user.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
        };
        return this.userService.updateUser(newUser, this.user._id).subscribe(function (user) {
            _this.user.username = user.username;
            _this.user.firstName = user.firstName;
            _this.user.lastName = user.lastName;
            _this.user.email = user.email;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.user._id).subscribe(function () {
            _this.logout();
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.sharedService.user = '';
            _this.router.navigate(['/login']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "createForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/view/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/view/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/view/user/register-admin/register-admin.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view/user/register-admin/register-admin.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #000;\n}\n\n.homepage {\n  z-index: 1;\n  position: relative;\n  padding-top: 10vh;\n  padding-left: 30%;\n  padding-right: 30%;\n  color: white;\n}\n\n.homepage h1 {\n  color: black;\n}\n\n.backimg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.backimg li {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  -webkit-animation: imageAnimation 30s linear infinite;\n          animation: imageAnimation 30s linear infinite;\n}\n\n.backimg li:nth-child(1) {\n  background-image: url('bg-masthead.jpg')\n}\n\n.backimg li:nth-child(2) {\n  background-image: url('2.jpg');\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n\n.backimg li:nth-child(3) {\n  background-image: url('3.jpg');\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n.backimg li:nth-child(4) {\n  background-image: url('4.jpg');\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n}\n\n.backimg li:nth-child(5) {\n  background-image: url('5.jpg');\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s;\n}\n\n.backimg li:nth-child(6) {\n  background-image: url('6.jpg');\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s;\n}\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n.no-cssanimations .backimg li {\n  opacity: 1;\n}\n\n.inter-button {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL3JlZ2lzdGVyLWFkbWluL3JlZ2lzdGVyLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsVUFBVTtFQUNWLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDhCQUE2QztFQUM3Qyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBZkE7RUFDRTtJQUNFLFVBQVU7SUFDViwwQ0FBa0M7WUFBbEMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkNBQW1DO1lBQW5DLG1DQUFtQztFQUNyQztFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci9yZWdpc3Rlci1hZG1pbi9yZWdpc3Rlci1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5ob21lcGFnZSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvbWVwYWdlIGgxIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmFja2ltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iYWNraW1nIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGFuaW1hdGlvbjogaW1hZ2VBbmltYXRpb24gMzBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvYmctbWFzdGhlYWQuanBnKVxufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDVzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMy5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDEwcztcbn1cbi5iYWNraW1nIGxpOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWdzLzQuanBnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy81LmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMjBzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvNi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDI1cztcbn1cblxuQGtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG59XG5cbi5uby1jc3NhbmltYXRpb25zIC5iYWNraW1nIGxpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmludGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view/user/register-admin/register-admin.component.html":
/*!************************************************************************!*\
  !*** ./src/app/view/user/register-admin/register-admin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <div class=\"text-center\">\n    <h1>Register</h1>\n  </div>\n  <form #inputForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" name=\"username\" id='name' placeholder=\"Tom\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input type=\"password\" name=\"password\" id='pass' placeholder=\"Write your password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"vpass\">Verify Password</label>\n      <input type=\"password\" name=\"v_password\" id='vpass' placeholder=\"Write your password again\" class=\"form-control\" ngModel required #v_password=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please enter verify password!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"em\">Email</label>\n      <input type=\"email\" name=\"email\" id='em' placeholder=\"Write your email address\" class=\"form-control\" ngModel required #email=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!email.valid && email.touched\">\n      Please enter email!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"invitedcode\">Admin Register Key</label>\n      <input type=\"password\" name=\"adminkey\" id='invitedcode' placeholder=\"Write your secret admin key\" class=\"form-control\" ngModel required #adminkey=\"ngModel\">\n    </div>\n    <!--<span class=\"alert alert-danger\" *ngIf=\"user_type.touched\">-->\n    <!--Please chose user type!-->\n    <!--</span>-->\n\n    <div class=\"form-group inter-button\">\n      <button [disabled]=\"!inputForm.valid\" class=\"btn btn-success btn-block\" type=\"button\" (click)=\"register()\">Register</button>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <a routerLink=\"/login\" class=\"btn btn-primary btn-block\">Login</a>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <a routerLink=\"/\" class=\"btn btn-danger btn-block\">Back to home</a>\n    </div>\n  </form>\n</div>\n\n<ul class=\"backimg\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/view/user/register-admin/register-admin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view/user/register-admin/register-admin.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAdminComponent", function() { return RegisterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterAdminComponent = /** @class */ (function () {
    function RegisterAdminComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = '';
        this.ADMIN_KEY = 'a secret invite key';
    }
    RegisterAdminComponent.prototype.register = function () {
        var _this = this;
        // Student, Teacher, Guest, Admin
        var password = this.registerForm.value.password;
        var v_password = this.registerForm.value.v_password;
        var username = this.registerForm.value.username;
        var email = this.registerForm.value.email;
        var key = this.registerForm.value.adminkey;
        var flag = 'Admin';
        if (v_password !== password) {
            this.errorFlag = true;
            this.errorMsg = 'Password mis-matching!';
        }
        else if (!this.validateEmail(email)) {
            this.errorFlag = true;
            this.errorMsg = 'Email is wrong!';
        }
        else if (key !== this.ADMIN_KEY) {
            this.errorFlag = true;
            this.errorMsg = 'Your admin key is incorrect!';
        }
        else {
            this.errorFlag = false;
            this.userService.register(username, password, email, flag).subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(['/admin']);
            }, function (err) {
                _this.errorFlag = true;
                _this.errorMsg = 'Username unavailable!';
            });
        }
    };
    RegisterAdminComponent.prototype.ngOnInit = function () {
    };
    RegisterAdminComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterAdminComponent.prototype, "registerForm", void 0);
    RegisterAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-admin',
            template: __webpack_require__(/*! ./register-admin.component.html */ "./src/app/view/user/register-admin/register-admin.component.html"),
            styles: [__webpack_require__(/*! ./register-admin.component.css */ "./src/app/view/user/register-admin/register-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterAdminComponent);
    return RegisterAdminComponent;
}());



/***/ }),

/***/ "./src/app/view/user/register/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view/user/register/register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #000;\n}\n\n.homepage {\n  z-index: 1;\n  position: relative;\n  padding-top: 10vh;\n  padding-left: 30%;\n  padding-right: 30%;\n  color: white;\n}\n\n.homepage h1 {\n  color: black;\n}\n\n.backimg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.backimg li {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  -webkit-animation: imageAnimation 30s linear infinite;\n          animation: imageAnimation 30s linear infinite;\n}\n\n.backimg li:nth-child(1) {\n  background-image: url('bg-masthead.jpg')\n}\n\n.backimg li:nth-child(2) {\n  background-image: url('2.jpg');\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s;\n}\n\n.backimg li:nth-child(3) {\n  background-image: url('3.jpg');\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n}\n\n.backimg li:nth-child(4) {\n  background-image: url('4.jpg');\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n}\n\n.backimg li:nth-child(5) {\n  background-image: url('5.jpg');\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s;\n}\n\n.backimg li:nth-child(6) {\n  background-image: url('6.jpg');\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s;\n}\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  20% {\n    opacity: 1\n  }\n  30% {\n    opacity: 0\n  }\n}\n\n.no-cssanimations .backimg li {\n  opacity: 1;\n}\n\n.inter-button {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsVUFBVTtFQUNWLHFEQUE2QztVQUE3Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDhCQUE2QztFQUM3Qyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsOEJBQTZDO0VBQzdDLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBNkM7RUFDN0MsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRTtFQUNGO0FBQ0Y7O0FBZkE7RUFDRTtJQUNFLFVBQVU7SUFDViwwQ0FBa0M7WUFBbEMsa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkNBQW1DO1lBQW5DLG1DQUFtQztFQUNyQztFQUNBO0lBQ0U7RUFDRjtFQUNBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5ob21lcGFnZSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvbWVwYWdlIGgxIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmFja2ltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iYWNraW1nIGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDA7XG4gIGFuaW1hdGlvbjogaW1hZ2VBbmltYXRpb24gMzBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvYmctbWFzdGhlYWQuanBnKVxufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDVzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvMy5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDEwcztcbn1cbi5iYWNraW1nIGxpOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWdzLzQuanBnKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XG59XG4uYmFja2ltZyBsaTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1ncy81LmpwZyk7XG4gIGFuaW1hdGlvbi1kZWxheTogMjBzO1xufVxuLmJhY2tpbWcgbGk6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZ3MvNi5qcGcpO1xuICBhbmltYXRpb24tZGVsYXk6IDI1cztcbn1cblxuQGtleWZyYW1lcyBpbWFnZUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgMTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG59XG5cbi5uby1jc3NhbmltYXRpb25zIC5iYWNraW1nIGxpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmludGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/view/user/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/view/user/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <div class=\"text-center\">\n    <h1>Register</h1>\n  </div>\n  <form #inputForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" name=\"username\" id='name' placeholder=\"Tom\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input type=\"password\" name=\"password\" id='pass' placeholder=\"Write your password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"vpass\">Verify Password</label>\n      <input type=\"password\" name=\"v_password\" id='vpass' placeholder=\"Write your password again\" class=\"form-control\" ngModel required #v_password=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please enter verify password!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"em\">Email</label>\n      <input type=\"email\" name=\"email\" id='em' placeholder=\"Write your email address\" class=\"form-control\" ngModel required #email=\"ngModel\">\n    </div>\n    <span class=\"alert alert-danger\" *ngIf=\"!email.valid && email.touched\">\n      Please enter email!\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"selector\">User Type</label>\n      <select class=\"form-control\" id=\"selector\" name=\"user_type\" ngModel required #user_type=\"ngModel\">\n        <option>Student</option>\n        <option>Teacher</option>\n        <option>Guest</option>\n      </select>\n    </div>\n    <!--<span class=\"alert alert-danger\" *ngIf=\"user_type.touched\">-->\n      <!--Please chose user type!-->\n    <!--</span>-->\n\n    <div class=\"form-group inter-button\">\n      <button [disabled]=\"!inputForm.valid\" class=\"btn btn-success btn-block\" type=\"button\" (click)=\"register()\">Register</button>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <a routerLink=\"/login\" class=\"btn btn-primary btn-block\">Login</a>\n    </div>\n\n    <div class=\"form-group inter-button\">\n      <a routerLink=\"/\" class=\"btn btn-danger btn-block\">Back to home</a>\n    </div>\n  </form>\n</div>\n\n<ul class=\"backimg\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/view/user/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view/user/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = '';
        this.NEU_STUDENT_SUFFIX = 'husky.neu.edu';
        this.NEU_TEACHER_SUFFIX = 'northeastern.edu';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // Student, Teacher, Guest, Admin
        var password = this.registerForm.value.password;
        var v_password = this.registerForm.value.v_password;
        var username = this.registerForm.value.username;
        var email = this.registerForm.value.email;
        var flag = this.registerForm.value.user_type;
        if (v_password !== password) {
            this.errorFlag = true;
            this.errorMsg = 'Password mis-matching!';
        }
        else if (!this.validateEmail(email)) {
            this.errorFlag = true;
            this.errorMsg = 'Email is wrong!';
        }
        else if (flag === 'Student' && !email.includes(this.NEU_STUDENT_SUFFIX)) {
            this.errorFlag = true;
            this.errorMsg = 'Email is not a NEU student email!';
        }
        else if (flag === 'Teacher' && !email.includes(this.NEU_TEACHER_SUFFIX)) {
            this.errorFlag = true;
            this.errorMsg = 'Email is not a NEU teacher email!';
        }
        else {
            this.errorFlag = false;
            this.userService.register(username, password, email, flag).subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(['/main']);
            }, function (err) {
                console.log(err);
                _this.errorFlag = true;
                _this.errorMsg = 'Username unavailable!';
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/view/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/view/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yang/Downloads/neu-stackoverflow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map