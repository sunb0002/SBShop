import { Injectable } from '@angular/core';
import { ProfileApi } from 'app/shared/backend-api/sbshop';
import { Observable } from 'rxjs/Rx';

import { UserDTO } from './../shared/backend-api/sbshop/model/UserDTO';

@Injectable()
export class ProfileService {

  constructor(private profileApi: ProfileApi) { }

  searchUserByName(name: string): Observable<Array<UserDTO>> {
    return this.profileApi.searchUsersByNameUsingGET(name)
      .do(resp => console.log('Searching with name', name))
      .map(resp => resp.data)
      .catch(ex => Observable.throw(ex));
  }



}
