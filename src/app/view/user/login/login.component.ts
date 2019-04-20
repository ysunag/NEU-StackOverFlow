import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('inputForm') loginForm: NgForm;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  login() {

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    return this.userService.login(username, password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          // Student, Teacher, Guest, Admin
          if (user.flag === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/main']);
          }
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

}
