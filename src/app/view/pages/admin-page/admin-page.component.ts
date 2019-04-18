import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {User} from '../../../model/user.model.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  user: User;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
