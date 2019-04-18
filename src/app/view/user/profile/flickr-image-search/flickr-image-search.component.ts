import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../services/flickr.service.client';
import {UserService} from '../../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  user: any;
  photos: [any];
  error: string;
  searchText: string;

  constructor(private flickrService: FlickrService, private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          this.photos = data.photos.photo;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.user.url = url;
    this.userService.updateUser(this.user, this.user._id).subscribe((data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/profile']);
          } else {
            this.error = 'failed!';
          }
        }
      );
  }

}
