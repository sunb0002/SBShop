import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ShopProfileService } from 'app/services/profile.service';
import { Constants } from 'app/shared/global-constants/Constants';
import { finalize } from 'rxjs/operators/finalize';

import { UserDTO } from './../../../shared/backend-api/sbshop/model/UserDTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public displayUsers: Array<UserDTO> = [];
  public editProfile: UserDTO;

  public isDataLoading: boolean;

  private nameSearchCtrl = new FormControl('', [Validators.required]);
  private nameCtrl = new FormControl('', [Validators.required]);
  private nricCtrl = new FormControl('', [Validators.required, Validators.pattern(Constants.NricRegex)]);
  private FG = new FormGroup({
    nameCtrl: this.nameCtrl,
    nricCtrl: this.nricCtrl,
  });

  public notificationOptions = {
    position: ['middle', 'right'],
    lastOnBottom: false,
    timeOut: 2000
  };

  constructor(public profileSvc: ShopProfileService,
    private notificationSvc: NotificationsService) {
    this.isDataLoading = false;
    this.initEditProfile();
  }

  initEditProfile(): void {
    this.editProfile = <UserDTO>{};
    this.FG.markAsPristine();
  }

  isCreateNewUser(): boolean {
    return this.editProfile.userId == null;
  }

  searchByName(): void {
    const nameSearchVal = this.nameSearchCtrl.value;
    this.profileSvc.searchUserByName(nameSearchVal).subscribe(
      data => this.displayUsers = data,
      error => this.notifyError(error)
    );
  }

  displayAllUsers(): void {
    this.profileSvc.getAllUsers().subscribe(
      data => this.displayUsers = this.profileSvc.allUsers,
      error => this.notifyError(error)
    );
  }

  updateEditUser(): void {
    this.isDataLoading = true;
    this.profileSvc.updateUser(this.editProfile).pipe(
      finalize(() => this.isDataLoading = false)
    ).subscribe(
      data => {
        if (this.isCreateNewUser()) {
          this.initEditProfile();
          this.displayAllUsers();
        }
        this.notificationSvc.success('Profile', 'Profile has been saved successfully.');
      },
      error => this.notifyError(error)
    );
  }

  private notifyError(err: Response): void {
    console.error('Error occurred: ', err);
    this.notificationSvc.error('Profile', Constants.generalErrorMsg);
  }

}
