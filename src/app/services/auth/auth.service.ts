import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';

import { ShopProfileService } from '../profile.service';
import { StoreConfigService } from '../store-config.service';
import { ENABLE_JWT_VERIFICATION } from '../TOKENS';

@Injectable()
export class AuthService {

  private readonly enableJwtVerification: boolean;

  constructor(
    private shopProfileSvc: ShopProfileService,
    private storeConfigSvc: StoreConfigService,
    @Optional() @Inject(ENABLE_JWT_VERIFICATION) private enableJwt: boolean,
  ) {
    this.enableJwtVerification = enableJwt || false;
  }


  /**
   *
   */
  public doJwtValidation(): Observable<any> {

    if (!this.enableJwtVerification) {
      return of(true);
    }

    const jwtToken = this.storeConfigSvc.getJwtTokenFromBrowser();
    if (!jwtToken) {
      this.storeConfigSvc.failJwtValidation('No Jwt token available in storage.');
      return of(false);
    }

    return this.shopProfileSvc.getAdminProfile().pipe(
      catchError(ex => {
        this.storeConfigSvc.failJwtValidation(ex);
        return of(false);
      })
    );
  }


}
