import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('inputForm') registerForm: NgForm;
  user: User;
  errorFlag: boolean;
  errorMsg = '';
  NEU_STUDENT_SUFFIX = 'husky.neu.edu';
  NEU_TEACHER_SUFFIX = 'northeastern.edu';


  constructor(private userService: UserService, private router: Router) { }

  register() {
    // Student, Teacher, Guest, Admin
    const password = this.registerForm.value.password;
    const v_password = this.registerForm.value.v_password;
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const flag = this.registerForm.value.user_type;
    if ( v_password !== password) {
      this.errorFlag = true;
      this.errorMsg = 'Password mis-matching!';
    } else if (!this.validateEmail(email)) {
      this.errorFlag = true;
      this.errorMsg = 'Email is wrong!';
    } else if (flag === 'Student' && !email.includes(this.NEU_STUDENT_SUFFIX)) {
      this.errorFlag = true;
      this.errorMsg = 'Email is not a NEU student email!';
    } else if (flag === 'Teacher' && !email.includes(this.NEU_TEACHER_SUFFIX)) {
      this.errorFlag = true;
      this.errorMsg = 'Email is not a NEU teacher email!';
    } else {
      this.errorFlag = false;
      this.userService.register(username, password, email, flag).subscribe(
        (user: User) => {
          this.user = user;
          this.router.navigate(['/main']);
        }, (err: any) => {
          console.log(err);
          this.errorFlag = true;
          this.errorMsg = 'Username unavailable!';
        }
      );
    }
  }

  ngOnInit() {
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
