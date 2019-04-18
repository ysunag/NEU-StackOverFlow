import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {User} from '../../../model/user.model.client';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user: User;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
