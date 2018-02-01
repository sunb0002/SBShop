import { Injectable } from '@angular/core';
import { ProfileApi, ProfileResponseUser } from 'app/shared/backend-api/sbshop';
import { Observable } from 'rxjs/Rx';

import { UserDTO } from './../shared/backend-api/sbshop/model/UserDTO';

@Injectable()
export class ProfileService {

  public allUsers: Array<UserDTO> = [];

  constructor(private profileApi: ProfileApi) { }

  /**
   * @param name
   */
  searchUserByName(name: string): Observable<Array<UserDTO>> {
    return this.profileApi.searchUsersByNameUsingGET(name)
      .do(resp => console.log('Searching with name', name))
      .map(resp => resp.data)
      .do(result => console.log('Search result: ', result))
      .catch(ex => Observable.throw(ex));
  }

  getAllUsers(): Observable<void> {
    return this.profileApi.searchUsersByNameUsingGET(name)
      .do(resp => this.allUsers = resp.data as Array<UserDTO>)
      .catch(ex => Observable.throw(ex));
  }

  updateUser(dto: UserDTO): Observable<void> {
    return this.profileApi.saveUserProfileUsingPOST(dto)
      .do(resp => console.log('This profile has been updated: ', resp.data))
      .flatMap(() => this.getAllUsers());
  }

}
