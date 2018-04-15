import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';

import { AdminDTO } from '../shared/backend-api/sbshop';
import { ProfileService } from '../shared/backend-api/sbshop/api/api';
import { UserDTO } from './../shared/backend-api/sbshop/model/UserDTO';

@Injectable()
export class ShopProfileService {

  public admin: AdminDTO;
  public allUsers: Array<UserDTO> = [];

  constructor(private profileApiSvc: ProfileService) { }

  /**
   * @param name
   */
  searchUserByName(name: string): Observable<Array<UserDTO>> {
    return this.profileApiSvc.searchUsersByNameUsingGET(name).pipe(
      tap(resp => console.log('Searching with name', name)),
      map(resp => resp.data),
      tap(result => console.log('Search result: ', result)),
      catchError(ex => Observable.throw(ex)),
    );
  }

  getAllUsers(): Observable<void> {
    return this.profileApiSvc.searchUsersByNameUsingGET(name).pipe(
      tap(resp => this.allUsers = resp.data as Array<UserDTO>),
      catchError(ex => Observable.throw(ex))
    );
  }

  updateUser(dto: UserDTO): Observable<void> {
    return this.profileApiSvc.saveUserProfileUsingPOST(dto).pipe(
      tap(resp => console.log('This profile has been updated: ', resp.data)),
      switchMap(() => this.getAllUsers()),
    );
  }

  getAdminProfile(): Observable<AdminDTO> {
    return this.profileApiSvc.getAdminDetailsUsingGET().pipe(
      map(resp => resp.data),
      tap(data => this.admin = data as AdminDTO)
    );
  }

}
