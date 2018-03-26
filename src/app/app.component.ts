import { Component } from '@angular/core';

import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private AuthSvc: AuthService) {
  }

  onActivate(event: any) {
    this.AuthSvc.doJwtValidation().subscribe();
  }
}
