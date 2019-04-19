import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-follow',
  templateUrl: './my-follow.component.html',
  styleUrls: ['./my-follow.component.css']
})
export class MyFollowComponent implements OnInit {

  user: User;
  userList: User[] = [];


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        return this.userService.findFollowusers(this.user._id).subscribe((userList: User[]) => {
          this.userList = userList;
        });
      }
    );
  }

  unfollow(unFollowId) {
    this.userService.unfollow(this.user._id, unFollowId).subscribe((status) => {
      this.userService.findFollowusers(this.user._id).subscribe((userList: User[]) => {
        this.userList = userList;
      });
    });
  }

}
