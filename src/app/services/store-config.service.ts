import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class StoreConfigService {

  constructor(private notificationSvc: NotificationsService) { }

  public getJwtTokenFromBrowser(): string {
    return sessionStorage.getItem('jwtBridgeStorage');
  }

  public failJwtValidation(reason: string): void {
    console.error('Jwt validation failed: ', reason);
    this.notificationSvc.error('Auth Error. Redirecting>>>', reason + ', Occured at: ' + location.href);
    setTimeout(() => window.location.href = window.location.origin + '/assets/mobile_login.html', 2000);
  }

}
