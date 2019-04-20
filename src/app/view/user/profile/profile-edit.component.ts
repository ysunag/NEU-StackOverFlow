import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileEditComponent implements OnInit {
  user: User;
  uid: String;
  baseUrl = environment.baseUrl;
  inAdminMode: boolean;

  @ViewChild('inputForm') createForm: NgForm;
  constructor(private activeRouter: ActivatedRoute,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  updateUser() {
    const newUser = {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
    };

    return this.userService.updateUser(newUser, this.user._id).subscribe((user: User) => {
      this.user.username = user.username;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.user.email = user.email;
    });
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activeRouter.params.subscribe(params => {
      this.inAdminMode = true;
      this.uid = params['uid'];
      this.userService.findUserById(this.uid).subscribe((user: User) => {
        this.user = user;
        this.user.flag = 'Admin';
      });
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe(() => {});
  }


}
