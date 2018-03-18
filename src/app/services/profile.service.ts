import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ProfileService } from '../shared/backend-api/sbshop/api/api';
import { UserDTO } from './../shared/backend-api/sbshop/model/UserDTO';

@Injectable()
export class ShopProfileService {

  public allUsers: Array<UserDTO> = [];

  constructor(private profileApiSvc: ProfileService) { }

  /**
   * @param name
   */
  searchUserByName(name: string): Observable<Array<UserDTO>> {
    return this.profileApiSvc.searchUsersByNameUsingGET(name)
      .do(resp => console.log('Searching with name', name))
      .map(resp => resp.data)
      .do(result => console.log('Search result: ', result))
      .catch(ex => Observable.throw(ex));
  }

  getAllUsers(): Observable<void> {
    return this.profileApiSvc.searchUsersByNameUsingGET(name)
      .do(resp => this.allUsers = resp.data as Array<UserDTO>)
      .catch(ex => Observable.throw(ex));
  }

  updateUser(dto: UserDTO): Observable<void> {
    return this.profileApiSvc.saveUserProfileUsingPOST(dto)
      .do(resp => console.log('This profile has been updated: ', resp.data))
      .flatMap(() => this.getAllUsers());
  }

}
