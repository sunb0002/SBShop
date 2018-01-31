import { Component } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

import { UserDTO } from './../../../shared/backend-api/sbshop/model/UserDTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public searchResult: Array<UserDTO> = [];
  public errMsg: string;
  constructor(private profileSvc: ProfileService) { }

  addToCart() {
    this.profileSvc.searchUserByName('m').subscribe(
      data => console.log('Successful', data),
      error => console.log('Failed', error),
    )
  }

}
