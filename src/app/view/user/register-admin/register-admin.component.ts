import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  @ViewChild('inputForm') registerForm: NgForm;
  user: User;
  errorFlag: boolean;
  errorMsg = '';
  ADMIN_KEY = 'a secret invite key';


  constructor(private userService: UserService, private router: Router) { }

  register() {
    // Student, Teacher, Guest, Admin
    const password = this.registerForm.value.password;
    const v_password = this.registerForm.value.v_password;
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const key = this.registerForm.value.adminkey;
    const flag = 'Admin';
    if ( v_password !== password) {
      this.errorFlag = true;
      this.errorMsg = 'Password mis-matching!';
    } else if (!this.validateEmail(email)) {
      this.errorFlag = true;
      this.errorMsg = 'Email is wrong!';
    } else if (key !== this.ADMIN_KEY) {
      this.errorFlag = true;
      this.errorMsg = 'Your admin key is incorrect!';
    } else {
      this.errorFlag = false;
      this.userService.register(username, password, email, flag).subscribe(
        (user: User) => {
          this.user = user;
          this.router.navigate(['/admin']);
        }, (err: any) => {
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
