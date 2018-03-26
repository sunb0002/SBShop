import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
      return Observable.of(true);
    }

    const jwtToken = this.storeConfigSvc.getJwtTokenFromBrowser();
    if (!jwtToken) {
      this.storeConfigSvc.failJwtValidation('No Jwt token available in storage.');
      return Observable.of(false);
    }

    return this.shopProfileSvc.getAdminProfile().catch(ex => {
      this.storeConfigSvc.failJwtValidation(ex);
      return Observable.of(false);
    });
  }


}
